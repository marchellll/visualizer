/* eslint-disable no-await-in-loop */
/* eslint-disable no-param-reassign */

const swap = async (arr, i, j, callbacks) => {
  if (i === j) return;

  const {
    onSwap, afterSwap, log,
  } = callbacks;

  log(`Swapping ${arr[i]} and ${arr[j]}`);
  await onSwap(arr[i], arr[j]);
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  await afterSwap();
};

const partition = async (arr, from, to, callbacks) => {
  const {
    isRunning, onComparing, onPivotChoosen, onPivotDismiss, log,
  } = callbacks;

  const pivot = arr[to];
  log(`${pivot} is pivot now`);
  await onPivotChoosen(pivot);

  let smallerThanPivotIndex = from - 1;

  log(`Now we are finding where should we place the pivot.
  Smaller number than the pivot should on the left side of the pivot(${pivot}), bigger number on the right.

  Looping from the left and find the spot for pivot`);
  for (let seekerIndex = from; seekerIndex < to; seekerIndex += 1) {
    if (!isRunning()) {
      log('Terminated');
      return -1;
    }

    log(`Comparing ${arr[seekerIndex]} and pivot(${pivot})`);
    await onComparing(arr[seekerIndex], pivot);
    // if current element smaller than pivot
    if (arr[seekerIndex] < pivot) {
      log(`${arr[seekerIndex]} is smaller than pivot(${pivot}). ${arr[seekerIndex]} should be on the left side of the pivot`);

      // save it as smaller element
      smallerThanPivotIndex += 1;
      await swap(arr, smallerThanPivotIndex, seekerIndex, callbacks);
    } else {
      log(`${arr[seekerIndex]} is BIGGER than pivot(${pivot}). ${arr[seekerIndex]} should ended on the right side of the pivot`);
    }
  }

  // place pivot in the middle.
  // On pivots` right should be all numbers that is more than pivot
  // On pivots` left should be all numbers that is less than pivot
  log(`${arr[smallerThanPivotIndex]} is the last element whose smaller than pivot(${pivot}). Moving pivot(${pivot}) next to ${arr[smallerThanPivotIndex]}`);
  await swap(arr, smallerThanPivotIndex + 1, to, callbacks);
  await onPivotDismiss();
  return smallerThanPivotIndex + 1;
};

const inplaceQuickSort = async (arr, from, to, callbacks) => {
  const {
    isRunning, log,
  } = callbacks;

  if (!isRunning()) {
    log('Terminated');
    return;
  }

  if (from >= to) {
    // empty or single member array
    return;
  }

  const pivotIndex = await partition(arr, from, to, callbacks);
  await inplaceQuickSort(arr, from, pivotIndex - 1, callbacks);
  await inplaceQuickSort(arr, pivotIndex + 1, to, callbacks);
};

/**
 * O(n ^ 2)
 * @param {Array} arr - to be sorted
 * @param {Object} callbacks - includes:
 *  - isRunning - should return true or false. Will stop the sorting if false
 *  - onComparing - will take 2 args, which are the numers being compared
 *  - onSwap - will take 2 args, which are the numers being swapped
 *  - afterSwap - need to call this to clean up the animation. this could be improved
 *  - log - emit logs
 * @returns null
 */
export default async function (arr, callbacks) {
  const {
    log,
  } = callbacks;

  await inplaceQuickSort(arr, 0, arr.length - 1, callbacks);

  log('Array is sorted');
}
