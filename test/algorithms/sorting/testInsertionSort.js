/* eslint-env mocha */
const InsertionSort = require('../../../src').Algorithms.Sorting.InsertionSort;
const assert = require('assert');

describe('Insertion Sort', () => {
  it('should have no data when empty initialization', () => {
    const inst = new InsertionSort();
    assert.equal(inst.size, 0);
    assert.deepEqual(inst.unsortedList, []);
    assert.deepEqual(inst.sortedList, []);
  });
});
