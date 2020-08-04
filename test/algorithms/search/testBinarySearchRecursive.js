/* eslint-env mocha */
const binarysearchRecursive = require('../../../src/algorithms/search/binary_search_recursive');
const assert = require('assert');

describe('Binary Search Recursive', () => {
  it('should return -1 for empty array', () => {
    const index = binarysearchRecursive([], 1, 0, 0);

    assert.equal(index, -1);
  });

  it('should return -1 for no element found in array', () => {
    const index = binarysearchRecursive([2, 3, 4, 5, 6], 0, 4, 7);

    assert.equal(index, -1);
  });

  it('should return index of mid element', () => {
    const index = binarysearchRecursive([2, 3, 4, 5, 6], 0, 4, 4);

    assert.equal(index, 2);
  });

  it('should return index of first element', () => {
    const index = binarysearchRecursive([2, 3, 4, 5, 6], 0, 4, 2);

    assert.equal(index, 0);
  });

  it('should return index of last element', () => {
    const index = binarysearchRecursive([2, 3, 4, 5, 6], 0, 4, 6);

    assert.equal(index, 4);
  });
});
