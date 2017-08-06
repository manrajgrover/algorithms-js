/* eslint-env mocha */
const exponentialsearch = require('../../../src').algorithms.search.exponentialsearch;
const assert = require('assert');

describe('Exponential Search', () => {
  it('should return -1 for empty array', () => {
    const index = exponentialsearch([], 1);

    assert.equal(index, -1);
  });

  it('should return -1 for no element found in array', () => {
    const index = exponentialsearch([2, 3, 4, 5, 6], 1);

    assert.equal(index, -1);
  });

  it('should return index of mid element', () => {
    const index = exponentialsearch([2, 3, 4, 5, 6], 4);

    assert.equal(index, 2);
  });

  it('should return index of first element', () => {
    const index = exponentialsearch([2, 3, 4, 5, 6], 2);

    assert.equal(index, 0);
  });

  it('should return index of last element', () => {
    const index = exponentialsearch([2, 3, 4, 5, 6], 6);

    assert.equal(index, 4);
  });
});
