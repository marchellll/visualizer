import { BUBBLE_SORT, QUICK_SORT } from './names';
import bubbleSort from './bubbleSort';
import quickSort from './quickSort';

export default {
  [BUBBLE_SORT]: {
    fn: bubbleSort,
    display: 'Bubbble Sort',
  },
  [QUICK_SORT]: {
    fn: quickSort,
    display: 'Quick Sort',
  },
};
