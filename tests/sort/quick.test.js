import 'jasmine-expect';
import { qSort_orig, quickSort, quickTail } from 'src/sort/quick';
import { testTen, testThou } from './sortData';

describe('quickSort', () => {
  it('sorts usnig pivot vals', () => {
    expect(quickTail(testThou)[0]).toEqual(0);
  });
});
