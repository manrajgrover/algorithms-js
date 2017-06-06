/* eslint-env mocha */
const linearsearch = require('../../../src').algorithms.Searching.linearsearch;
const assert = require('assert');

describe('Binary Search', () => {
  it('should return -1 for empty array', () => {
    const index = linearsearch([], 1);

    assert.equal(index, -1);
  });

  it('should return -1 for no element found in array', () => {
    const index = linearsearch([2, 3, 4, 5, 6], 1);

    assert.equal(index, -1);
  });

  it('should return index of mid element', () => {
    const index = linearsearch([2, 3, 4, 5, 6], 4);

    assert.equal(index, 2);
  });

  it('should return index of first element', () => {
    const index = linearsearch([2, 3, 4, 5, 6], 2);

    assert.equal(index, 0);
  });

  it('should return index of last element', () => {
    const index = linearsearch([2, 3, 4, 5, 6], 6);

    assert.equal(index, 4);
  });
});
