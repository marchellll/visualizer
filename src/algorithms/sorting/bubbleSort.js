/* eslint-disable no-param-reassign */
export default async function (arr, options) {
  const {
    isRunning, onSwap, afterSwap, done,
  } = options;

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
