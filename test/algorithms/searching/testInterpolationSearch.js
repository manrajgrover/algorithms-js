/* eslint-env mocha */
const interpolationsearch = require('../../../src').algorithms.Searching.interpolationsearch;
const assert = require('assert');

describe('Binary Search', () => {
  it('should return -1 for empty array', () => {
    const index = interpolationsearch([], 1);

    assert.equal(index, -1);
  });

  it('should return -1 for no element found in array', () => {
    const index = interpolationsearch([2, 3, 4, 5, 6], 1);

    assert.equal(index, -1);
  });

  it('should return index of mid element', () => {
    const index = interpolationsearch([2, 3, 4, 5, 6], 4);

    assert.equal(index, 2);
  });

  it('should return index of first element', () => {
    const index = interpolationsearch([2, 3, 4, 5, 6], 2);

    assert.equal(index, 0);
  });

  it('should return index of last element', () => {
    const index = interpolationsearch([2, 3, 4, 5, 6], 6);

    assert.equal(index, 4);
  });
});
