export const lessThan = a => b => b < a;
export const xLessThan = a => b => !lessThan(a)(b);

export const isDefined = val => val != undefined;
export const isNum = x => !Math.isNaN(x);

export const first = coll => coll[0];
export const rest = coll => coll.slice(1);
export const filtBy = fn => coll => coll.filter(fn);
export const append = val => coll => coll.concat(val);

export const isEmpty = coll => !coll.length;
export const xEmpty = coll => !isEmpty(coll);
export const invokeIf = cond => passFn => failFn =>
  cond ? passFn() : failFn();

export const midX = coll => Math.ceil(coll.length / 2);
export const lSlice = coll => coll.slice(0, midX(coll));
export const rSlice = coll => coll.slice(midX(coll));
