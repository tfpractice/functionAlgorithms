import 'jasmine-expect';
import {
  back,
  docDist,
  eqIx,
  front,
  invDist,
  invert,
  matchInv,
  matchIx,
  maxinDrome,
  richieRich,
} from 'src/hackerrank/richie';

const test = '092282';

describe('matchIx', () => {
  it('maps each value to its reverse index', () => {
    console.log('matchIx(test)', matchInv(test));
    expect(matchInv(test)).toBeArray();
  });
});

describe('docDist', () => {
  it('returns the number of unmatched elements', () => {
    console.log('maxinDrome(test)', maxinDrome(test));

    console.log(
      'docDist(test)(maxinDrome(test))',
      docDist(test)(maxinDrome(test))
    );
    expect(docDist(test)(invert(test))).toEqual(4);
  });
});
