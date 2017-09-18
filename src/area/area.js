// xample: Given [1,3,2,4,1,3,1,4,5,2,2,1,4,2,2], return 15 (3
// bodies of water with volumes of 1,7,7 yields total volume of 15)

export const diff = a => b => a - b;
export const hasNext = a => ix => ix < a.length - 1;
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
