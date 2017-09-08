const lessThan = piv => a => a < piv;
const xLessThan = piv => a => !lessThan(piv)(a);
const isDefined = val => val != undefined;
const isNum = x => !isNaN(x);
const invokeIf = cond => passFn => failFn => (cond ? passFn() : failFn());
const filtBy = fn => coll => coll.filter(fn);
const append = val => coll => coll.concat(val);

export const qSort_orig = (arr) => {
  if (arr.length == 0) {
    return [];
  }

  const left = [];
  const right = [];
  const pivot = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return qSort_orig(left).concat(pivot, qSort_orig(right));
};

export const quickSort2 = ([ pivot, ...rest ]) =>
  !pivot
    ? []
    : quickSort(filtBy(lessThan(pivot))(rest)).concat(
      pivot,
      quickSort(filtBy(xLessThan(pivot))(rest))
    );

export const quickSort = ([ pivot, ...rest ]) =>
  !pivot
    ? []
    : append(quickSort(filtBy(lessThan(pivot))(rest)))(
      append([ pivot ])(quickSort(filtBy(xLessThan(pivot))(rest)))
    );

export const quickTail = ([ piv, ...rest ]) =>
  isNaN(piv)
    ? []
    : append(quickTail(filtBy(xLessThan(piv))(rest)))(
      append(piv)(quickTail(filtBy(lessThan(piv))(rest)))
    );
