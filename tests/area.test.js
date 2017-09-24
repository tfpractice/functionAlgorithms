import 'jasmine-expect';
import {
  diff,
  firstPeak,
  firstPIx,
  getBounds,
  getDiff,
  getDiffs,
  getNext,
  gtNext,
  gtPrev,
  hasNext,
  peaks,
  boundMap, boundTuple
  rBIx,
  rBound,
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
    // console.log('getDiffs(myHeights)', getDiffs(myHeights));
    // expect(getDiffs(myHeights)).toBeArray();
    // console.log('peaks(myHeights)', peaks(myHeights));
    // console.log('total(myHeights)', total(myHeights));
  });
});
describe('gtNext', () => {
  it('checks if an elements value is greater than its neighbors', () => {
    console.log('myHeights.find(gtNext)', myHeights.find(gtNext));
    expect(myHeights.find(gtNext)).toEqual(3);
  });
});
describe('firstPeak', () => {
  it('FINDS THE firstPeak', () => {
    expect(firstPeak(myHeights)).toEqual(3);
  });
});
describe('firstPIx', () => {
  it('returns the peak index', () => {
    console.log('firstPIx(myHeights)', firstPIx(myHeights));
    expect(firstPIx(myHeights)).toEqual(1);
  });
});
describe('rBound', () => {
  it('returns the rightbound of a peak', () => {
    console.log(
      'rBound(firstPeak(myHeights)(myHeights',
      rBound(myHeights)(firstPeak(myHeights))
    );
  });
});
describe('rBIx', () => {
  it('finds the index of the right bound', () => {
    console.log(
      'rBIx(firstPeak(myHeights))(myHeights)',
      rBIx(myHeights)(firstPeak(myHeights))     
    );
    // console.log("boundMap(myHeights)",boundMap(myHeights))
  });
});
