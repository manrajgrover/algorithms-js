/* eslint-env mocha */
const interpolationsearch = require('../../../src').algorithms.search.interpolationsearch;
const assert = require('assert');

describe('Interpolation Search', () => {
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

  it('should check for edge case where element at pos < element to search', () => {
    const sortedArray = [];

    for (let i = 0; i <= 100; i += 2) {
      sortedArray.push(i);
    }

    assert.equal(interpolationsearch(sortedArray, 6), 3);
    assert.equal(interpolationsearch(sortedArray, 103), -1);
    assert.equal(interpolationsearch(sortedArray, 37), -1);
    assert.equal(interpolationsearch(sortedArray, 68), 34);
    assert.equal(interpolationsearch(sortedArray, 48), 24);
  });

  it('should check for edge case where array contains all duplicate values', () => {
    const duplicateArray = [42, 42, 42, 42];
    assert.equal(interpolationsearch(duplicateArray, 6), -1);
    assert.equal(interpolationsearch(duplicateArray, 42), 0);
  });
});
