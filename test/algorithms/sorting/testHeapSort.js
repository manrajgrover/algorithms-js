/* eslint-env mocha */
const HeapSort = require('../../../src').algorithms.Sorting.HeapSort;
const assert = require('assert');

describe('HeapSort', () => {
  it('should have no data when empty initialization', () => {
    const inst = new HeapSort();
    assert.equal(inst.size, 0);
    assert.deepEqual(inst.unsortedList, []);
    assert.deepEqual(inst.sortedList, []);
  });

  it('should sort the array', () => {
    const inst = new HeapSort([2, 1, 3, 4]);
    assert.equal(inst.size, 4);

    assert.deepEqual(inst.unsortedList, [2, 1, 3, 4]);
    assert.deepEqual(inst.sortedList, [1, 2, 3, 4]);
    assert.equal(inst.toString(), '1, 2, 3, 4');
  });

});
