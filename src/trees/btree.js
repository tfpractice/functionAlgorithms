function Node(data, left, right) {
  this.data = data;
  this.left = left;
  this.right = right;
  this.show = show;
}

export const node = (data = null, left = null, right = null) => ({
  data,
  left,
  right,
});
export const getData = ({ data } = node()) => data;
export const getLeft = ({ left } = node()) => left;
export const getRight = ({ right } = node()) => right;

export const setData = d => n => node(d, getLeft(n), getRight(n));
export const setLeft = l => n => node(getData(n), l, getRight(n));
export const setRight = r => n => node(getData(n), getLeft(n), r);

export const xData = node => getData(node) == null;
export const ltData = node => next => getData(next) < getData(node);
export const gtData = node => next => getData(next) > getData(node);

export const addChild = next => (n) => {
  let updated = n;

  if (ltData(n)(next)) {
    updated = getLeft(n) ? addChild(next)(getLeft(n)) : setLeft(next)(n);
  } else if (gtData(n)(next)) {
    updated = getRight(n) ? addChild(next)(getRight(n)) : setRight(next)(n);
  }

  return updated;
};
export const addLeft = next => n =>
  ltData(n)(next)
    ? getLeft(n) ? addChild(next)(getLeft(n)) : setLeft(next)(n)
    : n;

export const addRight = next => n =>
  gtData(n)(next)
    ? getRight(n) ? addChild(next)(getRight(n)) : setRight(next)(n)
    : n;

export const tree = (src = null) => ({ src });
export const getSrc = ({ src }) => src;
export const setSrc = src => (t = tree()) =>
  getSrc(t) ? tree(addChild(getSrc(t))(src)) : tree(src);

export const addNode = node => t => setSrc(node)(t);

export const addNodeBin = (t = tree(), n) => addNode(n)(t);

export const inOrder = node =>
  node
    ? []
      .concat(inOrder(getLeft(node)))
      .concat(getData(node))
      .concat(inOrder(getRight(node)))
    : [];

export const preOrder = node =>
  node
    ? []
      .concat(getData(node))
      .concat(preOrder(getLeft(node)))
      .concat(preOrder(getRight(node)))
    : [];

export const postOrder = node =>
  node
    ? []
      .concat(postOrder(getLeft(node)))
      .concat(postOrder(getRight(node)))
      .concat(getData(node))
    : [];

export const getMin = (tree) => {
  let current = getSrc(tree);

  while (getLeft(current)) {
    current = getLeft(current);
  }
  return getData(current);
};

export const getMax = (tree) => {
  let current = getSrc(tree);

  while (getRight(current)) {
    current = getRight(current);
  }
  return getData(current);
};
