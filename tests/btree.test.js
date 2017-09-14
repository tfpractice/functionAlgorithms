import 'jasmine-expect';
import {
  addLeft,
  addNode,
  addNodeBin,
  addRight,
  getLeft,
  getMax,
  getMin,
  getRight,
  getSrc,
  gtData,
  inOrder,
  ltData,
  node,
  setData,
  setLeft,
  setRight,
  setSrc,
  tree,
  xData,
} from 'src/trees/btree';

const myNodes = [ ...Array(10).keys() ].map(i => node(i));

// console.log('myNodes', myNodes);
const [ n0, n1, n2, n3, n4, n5, n6, n7, n8, n9 ] = myNodes;
const myTree = [ n0, n1, n2, n3, n4, n6, n7, n8, n9 ].reduce(
  addNodeBin,
  tree(n5)
);

console.log('myTree', myTree);
describe('node', () => {
  it('creates a new node', () => {
    // console.log('node(3)', n3);
  });
});
describe('getLeft', () => {
  it('returns the left node', () => {
    // console.log('getLeft(setLeft(n2)(n3))', getLeft(setLeft(n2)(n3)));
  });
});
describe('tree', () => {
  it('creates a new tree', () => {
    console.log('inOrder(myTree)', inOrder(getSrc(myTree)));
    console.log('getMin(myTree)', getMin(myTree));

    console.log('getMax(myTree)', getMax(myTree));
  });
});
