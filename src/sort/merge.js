import {
  append,
  first,
  isEmpty,
  lessThan,
  lSlice,
  rest,
  rSlice,
} from './utils';

const single = el => [ el, Infinity ];
const sent = val => [].concat(val).concat(Infinity);
const split = arr => arr.map(single);
const addLesser = (a, b) => coll => coll.concat(a <= b ? a : b);

const hasLesser = c0 => c1 => first(c0) <= first(c1);
const getLesser = c0 => c1 => (hasLesser(c0)(c1) ? c0 : c1);
const firstLess = c0 => c1 => first(getLesser(c0)(c1));
const restLess = c0 => c1 => rest(getLesser(c0)(c1));
const sliceLess = c0 => c1 => (hasLesser(c0)(c1) ? rest(c0) : c0);

// const sliceLess = c0 => c1 => (hasLesser(c0)(c1) ? rest(c0) : rest(c0));

export const mergeLess = (c0, c1) => (acc = []) =>
  isEmpty(c0) || isEmpty(c1)
    ? append(c0)(append(c1)(acc))
    : mergeLess([ ...sliceLess(c0)(c1) ], [ ...sliceLess(c1)(c0) ])(
      append(firstLess(c0)(c1))(acc)
    );
export const mergeTail = coll =>
  coll.length < 2
    ? coll
    : mergeLess(mergeTail(lSlice(coll)), mergeTail(rSlice(coll)))([]);

const mergeSlice = (lArr, rArr) => {
  let rx = 0;
  let lx = 0;
  let res = [];
  const lCopy = lArr.concat(Infinity);
  const rCopy = rArr.concat(Infinity);
  const maxLen = lArr.length + rArr.length;

  for (let k = 0; k < maxLen; ++k) {
    const lVal = lCopy[lx];
    const rVal = rCopy[rx];

    res = addLesser(lVal, rVal)(res);
    if (lVal <= rVal) {
      lx++;
    } else {
      rx++;
    }
  }

  return res;
};

export function topMerge(coll) {
  if (coll.length < 2) {
    return coll;
  }

  const sliceX = Math.ceil(coll.length / 2);

  const leftSlice = coll.slice(0, sliceX);
  const rightSlice = coll.slice(sliceX);

  return mergeSlice(topMerge(leftSlice), topMerge(rightSlice));
}

export const merger = (arr, lStart, rStart, step) => {
  const res = [ ...arr ];

  if (step >= arr.length) {
    return arr;
  }
  let catRes = [];
  let catRes2 = [];
  const stopRight = rStart + step > arr.length ? arr.length : rStart + step;
  const rCopy = arr.slice(rStart, stopRight).concat(Infinity);
  const lCopy = arr.slice(lStart, lStart + step).concat(Infinity);

  let m = 0;
  let n = 0;
  const rx = 0;
  const lx = 0;

  for (let k = lStart; k < stopRight; ++k) {
    catRes2 = addLesser(lCopy[m], rCopy[n])(catRes2);

    if (lCopy[m] <= rCopy[n]) {
      res[k] = lCopy[m];
      catRes = catRes.concat(lCopy[m]);
      m++;
    } else {
      res[k] = rCopy[n];
      catRes = catRes.concat(rCopy[n]);
      n++;
    }
  }

  return res;
};

export const mergeSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }

  let step = 1;
  let lx, rx;
  let topRes = [];
  let mres = [ ...arr ];

  while (step < arr.length) {
    lx = 0;
    rx = step;
    while (rx + step <= arr.length) {
      mres = merger(mres, lx, rx, step);
      topRes = topRes.concat(merger(mres, lx, rx, step));
      lx = rx + step;
      rx = lx + step;
    }
    if (rx < arr.length) {
      mres = merger(mres, lx, rx, step);
    }

    step *= 2;
  }

  return mres;
};
export const mArrs = (arr, startLeft, stopLeft, startRight, stopRight) => {
  const rightArr = new Array(stopRight - startRight + 1);
  const leftArr = new Array(stopLeft - startLeft + 1);
  let k = startRight;

  for (let i = 0; i < rightArr.length - 1; ++i) {
    rightArr[i] = arr[k];
    ++k;
  }

  k = startLeft;
  for (let i = 0; i < leftArr.length - 1; ++i) {
    leftArr[i] = arr[k];
    ++k;
  }
  rightArr[rightArr.length - 1] = Infinity; // a sentinel value
  leftArr[leftArr.length - 1] = Infinity; // a sentinel value
  let m = 0;
  let n = 0;

  for (k = startLeft; k < stopRight; ++k) {
    if (leftArr[m] <= rightArr[n]) {
      arr[k] = leftArr[m];
      m++;
    } else {
      arr[k] = rightArr[n];
      n++;
    }
  }
  return arr;
};

export const mSort_orig = (arr) => {
  if (arr.length < 2) {
    return;
  }

  let step = 1;
  let left, right;

  while (step < arr.length) {
    left = 0;
    right = step;
    while (right + step <= arr.length) {
      merger(arr, left, left + step, right, right + step);
      left = right + step;
      right = left + step;
    }

    if (right < arr.length) {
      merger(arr, left, left + step, right, arr.length);
    }

    step *= 2;
  }
  return arr;
};
