function Node(data, left, right) {
  this.data = data;
  this.left = left;
  this.right = right;
  this.show = show;
}

const node = (data = null, left = null, right = null) => ({
  data,
  left,
  right,
});
const getData = ({ data } = { data: null }) => data;
const getLeft = ({ left } = { left: null }) => left;
const getRight = ({ right } = { right: null }) => right;

export const setData = d => n => node(d, getLeft(n), getRight(n));
export const setLeft = l => n => node(getData(n), l, getRight(n));
export const setRight = r => n => node(getData(n), getLeft(n), r);

export const xData = node => getData(node) == null;
export const ltData = node => next => getData(next) < getData(node);
export const gtData = node => next => getData(next) > getData(node);

export const addLeft = next => n =>
  ltData(n)(next)
    ? xData(getLeft(n)) ? setLeft(next)(n) : addLeft(next)(getLeft(n))
    : n;

export const addRight = next => n =>
  gtData(n)(next)
    ? xData(getRight(n)) ? setRight(next)(n) : addRight(next)(getRight(n))
    : n;

export const tree = (src = node()) => ({ src });
export const getSrc = ({ src = null }) => src;
export const setSrc = src => t => tree(src);

export const addNode = node => t => (getSrc(t) == null ? setSrc(node)(t) : {});

function insert(data) {
  const n = new Node(data, null, null);

  if (this.root == null) {
    this.root = n;
  } else {
    let current = this.root;
    let parent;

    while (true) {
      parent = current;
      if (data < current.data) {
        current = current.left;
        if (current == null) {
          parent.left = n;
          break;
        }
      } else {
        current = current.right;
        if (current == null) {
          parent.right = n;
          break;
        }
      }
    }
  }
}
