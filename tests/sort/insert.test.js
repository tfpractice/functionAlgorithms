import 'jasmine-expect';
import { insertSort, iSort_orig } from 'src/sort/insert';

const test = [ 4, 3, 6, 2, 9, 1 ];

describe('insertSort', () => {
  it('sorts the array', () => {
    console.log('insertSort(test)', insertSort(test));
    console.log('insertSort(test)', insertSort(test));
  });
});

describe('iSort_orig', () => {
  it('sorts the array', () => {
    console.log('iSort_orig(test)', iSort_orig(test));
  });
});
