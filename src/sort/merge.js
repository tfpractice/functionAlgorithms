// The nonrecursive, or iterative, version of Mergesort is referred to as a
// bottom-up process.The algorithm begins by breaking down the data set being
// sorted into a set of oneelementarrays. Then these arrays are slowly merged
// by creating a set of left and rightsubarrays, each holding the partially
//  sorted data until all that is left is one array with thedata perfectly
// sorted.

const single = el => [ el, Infinity ];
const split = arr => arr.map(single);

export const mArrs = (arr, startLeft, stopLeft, startRight, stopRight) => {
  // const rightArr = new Array(stopRight - startRight + 1);
  const rightArr = arr.slice(startRight, stopRight).concat(Infinity);
  const rCopy = arr.slice(startRight, stopRight);

  // const leftArr = new Array(stopLeft - startLeft + 1);
  const leftArr = arr.slice(startLeft, stopLeft).concat(Infinity);
  const lCopy = arr.slice(startLeft, stopLeft);

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

  console.log('rightArr', rightArr);
  console.log('leftArr', leftArr);

  // rightArr[rightArr.length - 1] = Infinity; // a sentinel value
  // leftArr[leftArr.length - 1] = Infinity; // a sentinel value

  // console.log('rightArr', rightArr);
  // console.log('leftArr', leftArr);
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
};

export const merger = (arr, startLeft, stopLeft, startRight, stopRight) => {
  // const rightArr = new Array(stopRight - startRight + 1);
  const rightArr = arr.slice(startRight, stopRight).concat(Infinity);
  const rCopy = arr.slice(startRight, stopRight);

  // const leftArr = new Array(stopLeft - startLeft + 1);
  const leftArr = arr.slice(startLeft, stopLeft).concat(Infinity);
  const lCopy = arr.slice(startLeft, stopLeft);

  //
  let k;

  //
  // for (let i = 0; i < rightArr.length - 1; ++i) {
  //   rightArr[i] = arr[k];
  //   ++k;
  // }
  //
  // k = startLeft;
  // for (let i = 0; i < leftArr.length - 1; ++i) {
  //   leftArr[i] = arr[k];
  //   ++k;
  // }

  console.log('rightArr', rightArr);
  console.log('leftArr', leftArr);

  // rightArr[rightArr.length - 1] = Infinity; // a sentinel value
  // leftArr[leftArr.length - 1] = Infinity; // a sentinel value

  // console.log('rightArr', rightArr);
  // console.log('leftArr', leftArr);
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
};

export const mSort = (arr) => {
  if (arr.length < 2) {
    return [];
  }

  const step = 1;
  let lx, rx;

  while (step < arr.length) {
    lx = 0;
    rx = step;
    while (rx + step <= arr.length) {
      mArrs(arr, lx, lx + step, rx, rx + step);
      lx = rx + step;
      rx = lx + step;
    }
  }
};
