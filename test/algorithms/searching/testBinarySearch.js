/* eslint-env mocha */
const binarysearch = require('../../../src').Algorithms.Searching.binarysearch;
const assert = require('assert');

describe('Binary Search', () => {
  it('should return -1 for empty array', () => {
    const index = binarysearch([], 1);

    assert.equal(index, -1);
  });
});
