/* eslint-env mocha */
const RadixSort = require('../../../src').algorithms.sort.RadixSort;
const assert = require('assert');

describe('Radix Sort', () => {
  it('should have no data when empty initialization', () => {
    const inst = new RadixSort();
    assert.equal(inst.size, 0);
    assert.deepEqual(inst.unsortedList, []);
    assert.deepEqual(inst.sortedList, []);
  });

  it('should sort the array', () => {
    const inst = new RadixSort([2, 1, 3, 4]);
    assert.equal(inst.size, 4);

    assert.deepEqual(inst.unsortedList, [2, 1, 3, 4]);
    assert.deepEqual(inst.sortedList, [1, 2, 3, 4]);
    assert.equal(inst.toString(), '1, 2, 3, 4');
  });

  it('should sort the array in ascending order with few equal vals', () => {
    const inst = new RadixSort([2, 1, 3, 4, 2]);
    assert.equal(inst.size, 5);

    assert.deepEqual(inst.unsortedList, [2, 1, 3, 4, 2]);
    assert.deepEqual(inst.sortedList, [1, 2, 2, 3, 4]);
    assert.equal(inst.toString(), '1, 2, 2, 3, 4');
  });

  it('should sort 2 element array', () => {
    const inst = new RadixSort([2, 1]);
    assert.equal(inst.size, 2);

    assert.deepEqual(inst.unsortedList, [2, 1]);
    assert.deepEqual(inst.sortedList, [1, 2]);
    assert.equal(inst.toString(), '1, 2');
  });

  it('should sort 1 element array', () => {
    const inst = new RadixSort([1]);
    assert.equal(inst.size, 1);

    assert.deepEqual(inst.unsortedList, [1]);
    assert.deepEqual(inst.sortedList, [1]);
    assert.equal(inst.toString(), '1');
  });
});
