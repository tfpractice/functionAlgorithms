export const testTen = [ 6, 10, 1, 9, 4, 8, 2, 7, 3, 5 ];
const ints = Array.from({ length: 100000 }, () =>
  Math.floor(Math.random() * 100000)
);

export const tailTest = [ ...new Set([ 0, ...ints ]) ];
export const testThou = [ ...new Set([ 0, ...ints ]) ];
