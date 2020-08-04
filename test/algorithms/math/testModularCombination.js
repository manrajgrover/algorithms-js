/* eslint-env mocha */
const modularCombination = require('../../../src').algorithms.math.modularCombination;
const assert = require('assert');

describe('Modular Combination', () => {
  it('should return null if r is larger than n', () => {
    assert.equal(modularCombination(5, 10, 5), null);
    assert.equal(modularCombination(0, 1, 13), null);
    assert.equal(modularCombination(10, 11, 13), null);
  });

  it('should return null if p is equal to 0', () => {
    assert.equal(modularCombination(5, 10, 0), null);
    assert.equal(modularCombination(0, 1, 0), null);
  });

  it('should return nCr mod p', () => {
    assert.equal(modularCombination(10, 2, 13), 6);
    assert.equal(modularCombination(5, 3, 7), 3);
    assert.equal(modularCombination(0, 0, 7), 1);
    assert.equal(modularCombination(5, 3, 1), 0);
  });
});
