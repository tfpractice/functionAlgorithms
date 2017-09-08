export const lessThan = a => b => b < a;
export const xLessThan = a => b => !lessThan(a)(b);

export const isDefined = val => val != undefined;
export const isNum = x => !Math.isNaN(x);

export const first = arr => arr[0];
export const rest = arr => arr.slice(1);
export const filtBy = fn => coll => coll.filter(fn);
export const append = val => coll => coll.concat(val);

export const invokeIf = cond => passFn => failFn =>
  cond ? passFn() : failFn();
