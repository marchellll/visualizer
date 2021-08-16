/* eslint-disable no-await-in-loop */
/* eslint-disable no-param-reassign */

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
    isRunning, onComparing, onSwap, afterSwap, log,
  } = callbacks;

  for (let index1 = 0; index1 < arr.length; index1 += 1) {
    log(`Finding the smallest number for index ${index1}`);
    for (let index2 = index1 + 1; index2 < arr.length; index2 += 1) {
      if (!isRunning()) {
        log('Terminated');
        return;
      }

      const number1 = arr[index1];
      const number2 = arr[index2];

      log(`Comparing ${number1} and ${number2}`);
      await onComparing(number1, number2); // callback
      if (number1 > number2) {
        log(`${number1} is more than ${number2}, Swapping!`);
        await onSwap(number1, number2); // callback
        arr[index1] = number2;
        arr[index2] = number1;
        await afterSwap(); // callback
      } else {
        log(`${number1} is not more than ${number2}`);
      }
    }
  }

  log('Array is sorted');
}
