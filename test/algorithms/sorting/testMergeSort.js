/* eslint-env mocha */
const MergeSort = require('../../../src').algorithms.Sorting.MergeSort;
const assert = require('assert');

describe('MergeSort', () => {
  it('should have no data when empty initialization', () => {
    const inst = new MergeSort();
    assert.equal(inst.size, 0);
    assert.deepEqual(inst.unsortedList, []);
    assert.deepEqual(inst.sortedList, []);
  });
});
