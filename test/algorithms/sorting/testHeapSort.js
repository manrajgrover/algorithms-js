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
});
