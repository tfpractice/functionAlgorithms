import 'jasmine-expect';
import {
  diff,
  getDiff,
  getDiffs,
  getNext,
  hasNext,
  peaks,
  total,
} from 'src/area';

const myHeights = [ 1, 3, 2, 4, 1, 3, 1, 4, 5, 2, 2, 1, 4, 2, 2 ];

describe('hasNext', () => {
  it('checks if an index is last in an array ', () => {
    expect(hasNext([ 1, 2, 3, 4, 4 ])(4)).toBeFalse();
    expect(hasNext([ 1, 2, 3, 4, 4 ])(3)).toBeTrue();
  });
});

describe('getNext', () => {
  it('returns the next element', () => {
    expect(getNext(1, 0, myHeights)).toEqual(3);
  });
});

describe('getDiff', () => {
  it('returns the diff betwen an element nad it s', () => {
    expect(getDiff(1, 0, myHeights)).toEqual(-2);
  });
});
describe('getDiffs', () => {
  it('maps an array to the differences', () => {
    console.log('getDiffs(myHeights)', getDiffs(myHeights));
    expect(getDiffs(myHeights)).toBeArray();
    console.log('peaks(myHeights)', peaks(myHeights));
    console.log('total(myHeights)', total(myHeights));
  });
});
