/* eslint-env mocha */
const BubbleSort = require('../../../src').Algorithms.Sorting.BubbleSort;
const assert = require('assert');

describe('BubbleSort', () => {
  it('should have no data when empty initialization', () => {
    const inst = new BubbleSort();
    assert.equal(inst.size, 0);
  });
});
