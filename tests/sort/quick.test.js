import 'jasmine-expect';
import { qSort_orig, quickSort, quickTail } from 'src/sort/quick';

// const test = [ 68, 80, 12, 84, 95, 70, 79, 27, 88, 93 ];
const ints = Array.from({ length: 100000 }, () =>
  Math.floor(Math.random() * 100000)
);
const tailTest = [ ...new Set([ 0, ...ints ]) ];

// const revTail = tailTest.sort();

// console.log('tailTest', tailTest);
describe('quickSort', () => {
  it('sorts usnig pivot vals', () => {
    expect(quickTail(tailTest)[0]).toEqual(0);

    // expect(quickTail(revTail)[0]).toEqual(0);
  });
});
