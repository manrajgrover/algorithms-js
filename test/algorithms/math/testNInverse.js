/* eslint-env mocha */
const nInverse = require('../../../src').algorithms.math.nInverse;
const assert = require('assert');

describe('Inverse of first n numbers', () => {
  it('should return inverse of first n numbers', () => {
    assert.equal(nInverse(1, 2), 1.00);
    assert.equal(nInverse(2, 3), 1.500);
    assert.equal(nInverse(4, 5), 2.08333);
  });

  it('should return undefined if n eaquals 0', () => {
    assert.equal(nInverse(0), undefined);
  });
});
