/* eslint-env mocha */
const FenwickTree = require('../../src').datastructures.FenwickTree;
const assert = require('assert');

describe('Fenwick Tree', () => {
  it('should be empty when initialized', () => {
    const inst = new FenwickTree([]);
    assert(inst.isEmpty());
    assert.equal(inst.size, 0);
  });

  it('should build tree with array', () => {
    const inst = new FenwickTree(4);

    inst.buildTree([1, 2, 3, 4]);
    assert(!inst.isEmpty());
    assert.equal(inst.size, 4);
  });

  it('should sum the array till index', () => {
    const inst = new FenwickTree(4);

    inst.buildTree([1, 2, 3, 4]);

    assert.equal(inst.getSum(2), 6);
    assert.equal(inst.getSum(0), 1);
    assert.equal(inst.getSum(3), 10);
    assert.throws(() => inst.getSum(4), Error);
  });

  it('should throw an error if passed object', () => {
    const inst = new FenwickTree(4);

    assert.throws(() => inst.buildTree({}), Error);
  });

  it('should get range sum', () => {
    const inst = new FenwickTree(4);

    inst.buildTree([1, 2, 3, 4]);

    assert.equal(inst.rangeSum(2, 3), 7);
    assert.equal(inst.rangeSum(1, 3), 9);
    assert.equal(inst.rangeSum(0, 3), 10);

    assert.equal(inst.rangeSum(3, 2), 7);
    assert.equal(inst.rangeSum(3, 1), 9);
    assert.equal(inst.rangeSum(3, 0), 10);
  });

  it('should update element in tree', () => {
    const inst = new FenwickTree(4);

    inst.buildTree([1, 2, 3, 4]);

    assert.equal(inst.rangeSum(2, 3), 7);
    assert.equal(inst.rangeSum(1, 3), 9);
    assert.equal(inst.rangeSum(0, 3), 10);

    inst.updateTree(1, 4);

    assert.equal(inst.getSum(2), 10);
    assert.equal(inst.rangeSum(1, 1), 6);
  });
});
