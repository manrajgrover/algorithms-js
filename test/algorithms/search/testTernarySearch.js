/* eslint-env mocha */
const ternarysearch = require('../../../src').algorithms.search.ternarysearch;
const assert = require('assert');

describe('Ternary Search', () => {
  it('should return -1 for empty array', () => {
    const index = ternarysearch([], 1);

    assert.equal(index, -1);
  });

  it('should return -1 for no element found in array', () => {
    const index = ternarysearch([2, 3, 4, 5, 6], 1);

    assert.equal(index, -1);
  });

  it('should return index of mid element', () => {
    const index = ternarysearch([2, 3, 4, 5, 6], 4);

    assert.equal(index, 2);
  });

  it('should return index of first element', () => {
    const index = ternarysearch([2, 3, 4, 5, 6], 2);

    assert.equal(index, 0);
  });

  it('should return index of last element', () => {
    const index = ternarysearch([2, 3, 4, 5, 6], 6);

    assert.equal(index, 4);
  });

  it('should return index of element between two mid points', () => {
    const index = ternarysearch([2, 3, 4, 5, 6, 8, 10], 5);
    assert.equal(index, 3);
  });
});
