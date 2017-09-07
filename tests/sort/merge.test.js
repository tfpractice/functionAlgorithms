import 'jasmine-expect';
import { mSort, mSort_orig } from 'src/sort/merge';

const test = [ 6, 10, 1, 9, 4, 8, 2, 7, 3, 5 ];

describe('merge', () => {
  it('merges', () => {
    console.log('mSort_orig(test)', mSort_orig(test));
  });
});
