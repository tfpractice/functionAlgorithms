// 3[abc]4[ab]c
// Would be output as
// abcabcabcababababc
export const findBracket = str => str.split('[');
export const build = (str) => {
  const res = findBracket(str).map(findBracket);
  const split = str
    .split('')
    .map((e, i) => [ i, e ])
    .filter(x => x[1] === '[');

  const currStr = str;

  console.log('new Map(str)', new Map(str.split('').entries()));
  console.log('split', new Map(split));
  return res;

  // console.log("str.split(",findBracket(str).map(findBracket)
};
