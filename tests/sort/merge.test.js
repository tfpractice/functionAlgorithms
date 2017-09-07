import 'jasmine-expect';
import { mergeSort, mSort_orig, topMerge } from 'src/sort/merge';

const test = [ 6, 10, 1, 9, 4, 8, 2, 7, 3, 5 ];

describe('merge', () => {
  it('merges', () => {
    // console.log('mergeSort(test)', mergeSort([ ...test ]));
    console.log('topMerge(test)', topMerge([ ...test ]));
  });
});
