// Sandy likes palindromes. A palindrome is a word, phrase, number, or other
// sequence of characters which reads the same backward as it does forward. For
// example, madam is a palindrome. On her birthday, Sandy's uncle, Richie Rich,
// offered her an -digit check which she refused because the number was not
// a palindrome. Richie then challenged Sandy to make the number palindromic
// by changing no more than digits.

// / Sandy can only change digit at a time,
// and cannot add digits to (or remove digits from) the number. Given and an
// -digit number, help Sandy determine the largest possible number she can make
// by changing digits. Note: Treat the integers as numeric strings. Leading
// zeros are permitted and can't be ignored (So 0011 is not a palindrome,
// 0110 is a valid palindrome).
// /A digit can be modified more than once.

// Input Format
// The first line contains two space-separated integers, (the number
// of digits in the number) and (the maximum number of digits that
// can be altered), respectively. The second line contains an -digit
// string of numbers that Sandy must attempt to make palindromic.

// ex (6 3,092282)=>(992299)
export const isOdd = str => str.length % 2;
export const invert = str =>
  str
    .split('')
    .reverse()
    .join('');

export const midX = str =>
  isOdd(str) ? -1 + Math.ceil(str.length / 2) : str.length / 2;

export const front = str => str.slice(0, midX(str));
export const back = str => str.slice(midX(str));
export const eqIx = str => (c, i) => c === invert(str)[i];
export const eqInv = str => (c, i) => c === invert(str)[i];
export const matchIx = s0 => s1 => i => s0[i] === s1[i];
export const matchInv = str => str.split('').map(eqInv(str));
export const compareIx = s0 => s1 => [ ...[ ...s0 ].keys() ].map(matchIx(s0)(s1));
export const docDist = s0 => s1 => compareIx(s0)(s1).filter(x => !x).length;
export const invDist = str => docDist(str)(invert(str));
export const tupIx = s0 => s1 => (c, i) => [ s0[i], s1[i] ];
export const tupInv = str => (c, i) => [ c, invert(str)[i] ];
export const max = tup => Math.max(...tup);
export const maxinDrome = str =>
  str
    .split('')
    .map(tupInv(str))
    .map(max)
    .join('');

export const richieRich = (s, n, k) => {
  // Complete this function
  // return matchIx(str)
};
