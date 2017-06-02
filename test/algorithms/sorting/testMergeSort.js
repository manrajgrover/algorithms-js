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

  it('should sort the array', () => {
    const inst = new MergeSort([2, 1, 3, 4]);
    assert.equal(inst.size, 4);

    assert.deepEqual(inst.unsortedList, [2, 1, 3, 4]);
    assert.deepEqual(inst.sortedList, [1, 2, 3, 4]);
    assert.equal(inst.toString(), '1, 2, 3, 4');
  });
});
