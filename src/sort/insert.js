export const iSort_orig = (coll) => {
  let temp, inner, outer;
  const arr = [ ...coll ];

  for (outer = 1; outer <= arr.length - 1; ++outer) {
    temp = arr[outer];
    inner = outer;
    while (inner > 0 && arr[inner - 1] >= temp) {
      arr[inner] = arr[inner - 1];
      inner -= 1;
    }
    arr[inner] = temp;
  }
  return arr;
};

const insertReduce = (acc, curr, cx, coll) => {
  const res = [ ...acc ];

  let px = cx;

  while (px && acc[px - 1] >= curr) {
    res[px] = acc[px - 1];
    --px;
  }

  res[px] = curr;
  return res;
};

export const insertSort = arr => arr.reduce(insertReduce, [ ...arr ]);
