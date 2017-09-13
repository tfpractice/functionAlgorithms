import 'jasmine-expect';
import {
  back,
  docDist,
  eqIx,
  front,
  matchIx,
  richieRich,
} from 'src/hackerrank/richie';

const test = '092282';

describe('matchIx', () => {
  it('maps each value to its reverse index', () => {
    console.log('matchIx(test)', matchIx(test));
    expect(matchIx(test)).toBeArray();
  });
});

describe('docDist', () => {
  it('returns the number of unmatched elements', () => {
    expect(docDist(test)).toEqual(4);
  });
});
