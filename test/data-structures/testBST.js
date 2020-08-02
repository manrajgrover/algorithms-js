/* eslint-env mocha */
const BST = require('../../src').datastructures.BST;
const assert = require('assert');


describe('Binary Search Tree', () => {
  it('Check method on empty bst', () => {
    const bst = new BST();
    assert(bst.isEmpty());
    assert(bst.inorderTraversal().length === 0);
    assert(bst.minValue() === null);
    assert(bst.reverseOrderTraversal().length === 0);
    assert(!bst.delete(1)); // Doesn't return anything
    assert(bst.size() === 0);
    assert(!bst.contains(1));
  });

  it('Check double insert on empty bst', () => {
    const bst = new BST();
    assert(bst.insert(10));
    assert(bst.contains(10));
    assert(!bst.insert(10));
    assert(bst.contains(10));
    assert(bst.size() === 1);
  });

  it('Check one insertion and minValue', () => {
    const bst = new BST();
    assert(bst.insert(10));
    assert(bst.minValue() === 10);
    assert(bst.contains(10));
  });


  it('Check minValue during unsorted insertion', () => {
    const bst = new BST();
    const arr = [11, 20, 4, 54, -100, -4];
    arr.forEach(e => assert(bst.insert(e)));
    assert(bst.minValue() === -100);
  });

  it('Check inorder and reverse order traversals during unsorted insertion', () => {
    const bst = new BST();
    const arr = [11, 20, 4, 54, -100, -4];
    arr.forEach(e => assert(bst.insert(e)));

    // check inorder
    const inorder = bst.inorderTraversal();
    // Sort array. increasing order
    arr.sort((a, b) => a - b);
    // Check if returned traversal is sorted in increasing order
    inorder.forEach((v, i) => assert.equal(v, arr[i]));

    // check reverse order
    const revOrder = bst.reverseOrderTraversal();
    // Sort array. decreasing order
    arr.sort((a, b) => b - a);
    // Check if returned traversal is sorted in decreasing order
    revOrder.forEach((v, i) => assert.equal(v, arr[i]));
  });

  it('Check delete - one value', () => {
    const bst = new BST();
    assert(bst.insert(1));
    assert(bst.minValue() === 1);
    assert(bst.delete(1));
    // Check emptiness
    assert(bst.size() === 0);
    assert(bst.isEmpty());
  });

  it('Check delete - left children, root removal', () => {
    const bst = new BST();
    let arr = [5, 4, 3];
    arr.forEach(e => assert(bst.insert(e)));

    // check inorder
    arr = [3, 4];
    assert(bst.delete(5));
    // Get inorder traversed
    const inorder = bst.inorderTraversal();
    inorder.forEach((v, i) => assert(v === arr[i]));
  });

  it('Check delete - right children, root removal', () => {
    const bst = new BST();
    let arr = [3, 4, 5];
    arr.forEach(e => assert(bst.insert(e)));
    arr = [4, 5];
    assert(bst.delete(3));
    // Get inorder traversed
    const inorder = bst.inorderTraversal();
    inorder.forEach((v, i) => assert(v === arr[i]));
  });

  it('Check delete - both children, root removal', () => {
    const bst = new BST();
    let arr = [5, 4, 8, 7, 6];
    arr.forEach(e => assert(bst.insert(e)));
    arr = [4, 6, 7, 8];
    assert(bst.delete(5));
    // Get inorder traversed
    const inorder = bst.inorderTraversal();
    inorder.forEach((v, i) => assert(v === arr[i]));
  });

  it('Check delete - remove leaf', () => {
    const bst = new BST();
    let arr = [5, 4];
    arr.forEach(e => assert(bst.insert(e)));
    arr = [5];
    assert(bst.delete(4));
    // Get inorder traversed
    const inorder = bst.inorderTraversal();
    inorder.forEach((v, i) => assert(v === arr[i]));
  });

  it('Check delete - remove inner node with left child', () => {
    const bst = new BST();
    let arr = [6, 5, 9, 8, 7];
    arr.forEach(e => assert(bst.insert(e)));
    arr = [5, 6, 7, 9];
    assert(bst.delete(9));
    // Get inorder traversed
    const inorder = bst.inorderTraversal();
    inorder.forEach((v, i) => assert(v === arr[i]));
  });

  it('Check delete - remove inner node with right child', () => {
    const bst = new BST();
    let arr = [5, 3, 4];
    arr.forEach(e => assert(bst.insert(e)));
    arr = [4, 5];
    assert(bst.delete(3));
    const inorder = bst.inorderTraversal();
    inorder.forEach((v, i) => assert(v === arr[i]));
  });

  it('Check delete - remove inner node with both children', () => {
    const bst = new BST();
    let arr = [5, 3, 4, 1];
    arr.forEach(e => assert(bst.insert(e)));
    arr = [1, 4, 5];
    assert(bst.delete(3));
    const inorder = bst.inorderTraversal();
    inorder.forEach((v, i) => assert(v === arr[i]));
  });

  it('Check contains', () => {
    const bst = new BST();
    const arr = [3, 1, 5, 0, 2, 4, 6];
    arr.forEach(e => assert(bst.insert(e)));
    arr.forEach(v => assert(bst.contains(v)));
    assert(!bst.contains(-1));
  });
});
