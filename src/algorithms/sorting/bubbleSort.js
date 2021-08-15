/* eslint-disable no-param-reassign */

/**
 * O(n ^ 2)
 * @param {Array} arr - to be sorted
 * @param {Object} callbacks - includes:
 *  - isRunning - should return true or false. Will stop the sorting if false
 *  - onSwap - will take 2 args, which are the numers being swapped
 *  - afterSwap - need to call this to clean up the animation. this could be improved
 *  - done - after arr is sorted, this should be called
 * @returns null
 */
export default async function (arr, callbacks) {
  const {
    isRunning, onSwap, afterSwap, done,
  } = callbacks;

  for (let index1 = 0; index1 < arr.length; index1 += 1) {
    for (let index2 = index1 + 1; index2 < arr.length; index2 += 1) {
      if (!isRunning()) return;

      const number1 = arr[index1];
      const number2 = arr[index2];

      if (number1 > number2) {
        // eslint-disable-next-line no-await-in-loop
        await onSwap(number1, number2); // callback
        arr[index1] = number2;
        arr[index2] = number1;
        // eslint-disable-next-line no-await-in-loop
        await afterSwap(); // callback
      }
    }
  }

  done();
}
