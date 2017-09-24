// xample: Given [1,3,2,4,1,3,1,4,5,2,2,1,4,2,2], return 15 (3
// bodies of water with volumes of 1,7,7 yields total volume of 15)
export const gte = x => y => y >= x;
export const diff = a => b => a - b;
export const hasNext = a => ix => ix < a.length - 1;
export const hasPrev = a => ix => a.length && a.length - 1 > ix;
export const getNext = (el, ix, arr) => (hasNext(arr)(ix) ? arr[ix + 1] : null);
export const getDiff = (el, ix, arr) =>
  hasNext(arr)(ix) ? diff(el)(getNext(el, ix, arr)) : null;

//
export const getDiffs = nums => nums.map(getDiff);
export const findPeak = (el, ix, arr) => {
  const res = [];

  if (hasNext(arr)(ix)) {
    const succ = arr.slice(ix + 1);

    let next = succ.shift();

    while (next && next < el) {
      res.push(next);
      next = succ.shift();
    }
  }
  return [ el, res ];
};

export const peaks = nums => nums.map(findPeak);
export const total = nums =>
  getDiffs(nums)
    .filter(x => x > -1)
    .reduce((prv, curr) => prv + curr, 0);

// find the first platform whose height is greater than its neighbors (first collection point)
// find the next highest peak thereafter to know the bounds of the collection pool
// select the lesser fo the two peak to establish the max pool depth
// for every pool between the peaks, accumulate the differences ebetwwen the smaller of the tow peaks

export const gtNext = (h, ix, arr) =>
  hasNext(arr)(ix) && h > getNext(h, ix, arr);
export const gtPrev = (h, ix, arr) =>
  hasNext(arr)(ix) ? h > getNext(h, ix, arr) : h > arr[ix - 1];

export const firstPeak = arr => arr.find(gtNext);
export const firstPIx = arr => arr.findIndex(gtNext);
export const rBound = ht => arr => arr.find(gte(ht));
export const rBIx = ht => arr => arr.findIndex(gte(ht));
export const getBounds = arr => [
  firstPeak(arr),
  rBound(firstPeak(arr)(arr.slice(firstPIx(arr)))),
];
