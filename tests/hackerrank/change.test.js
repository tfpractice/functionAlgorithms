import 'jasmine-expect';
import { maxCount, subMax } from 'src/hackerrank/change';

const myTotal = 79;
const myCount = 5;
const myCoins = [ 25, 10, 5 ];

describe('maxCount', () => {
  it('returns the integer val of the quotient', () => {
    console.log('maxCount(myTotal)(25)', maxCount(myTotal)(25));
    expect(maxCount(myTotal)(25)).toEqual(3);
  });
});
describe('subMax', () => {
  it('subtracts the max valus from the total', () => {
    expect(subMax(myTotal)(25)).toEqual(4);
  });
});
