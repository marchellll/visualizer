import _ from 'lodash';
import quickSort from './quickSort';

const noopCallbacks = {
  isRunning: () => true,
  onComparing: () => { },
  onSwap: () => { },
  afterSwap: () => { },
  onPivotChoosen: () => { },
  onPivotDismiss: () => { },
  log: () => { },
};

test('sorted', async () => {
  const arr = [1, 2, 3, 4, 5, 6];
  const input = [...arr];

  await quickSort(input, noopCallbacks);

  expect(input).toEqual(arr);
});

test('reverse sorted', async () => {
  const arr = [1, 2, 3, 4, 5, 6];
  const input = _.reverse([...arr]);

  await quickSort(input, noopCallbacks);

  expect(input).toEqual(arr);
});

test('nearly sorted', async () => {
  const arr = [1, 2, 3, 5, 4, 6];

  await quickSort(arr, noopCallbacks);

  expect(arr).toEqual(arr.sort());
});

test('not unique', async () => {
  const arr = [1, 1, 1, 2, 2, 4, 4, 4];

  await quickSort(arr, noopCallbacks);

  expect(arr).toEqual(arr.sort());
});

Array.from({ length: 500 }).forEach(() => {
  test('flaky random', async () => {
    const arr = Array.from({ length: 50 }).map(() => parseInt(Math.floor(Math.random() * 100), 10));
    const input = [...arr];

    await quickSort(input, noopCallbacks);

    expect(input).toEqual(arr.sort((a, b) => a - b));
  });
});
