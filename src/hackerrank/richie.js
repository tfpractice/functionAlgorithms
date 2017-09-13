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
// 0110 is a valid palindrome). A digit can be modified more than once.

// Input Format
// The first line contains two space-separated integers, (the number
// of digits in the number) and (the maximum number of digits that
// can be altered), respectively. The second line contains an -digit
// string of numbers that Sandy must attempt to make palindromic.

// ex (6 3,092282)=>(992299)
const isOdd = str => str.length % 2;
const invert = str =>
  str
    .split('')
    .reverse()
    .join('');
const midX = str =>
  isOdd(str) ? -1 + Math.ceil(str.length / 2) : str.length / 2;

export const front = str => str.slice(0, midX(str));
export const back = str => str.slice(midX(str));
export const eqIx = str => (c, i) => c === invert(str).charAt(str.length % i);
export const matchIx = str => str.split('').map(eqIx(str));
export const docDist = str => matchIx(str).filter(x => !x).length;

export const richieRich = (s, n, k) => {
  // Complete this function
  // return matchIx(str)
};
