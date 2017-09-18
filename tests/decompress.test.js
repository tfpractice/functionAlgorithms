import 'jasmine-expect';
import { build, findBracket } from 'src/decompress/decompress';

const test = '3[abc]4[ab]c';

describe('findBracket', () => {
  it('finds brax', () => {
    console.log('buil(test)', build(test));
    console.log('findBracket(test)', findBracket(test));
  });
});
