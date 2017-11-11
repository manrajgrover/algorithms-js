/* eslint-env mocha */
const modularInverse = require('../../../src').algorithms.math.modularInverse.modularInverse;
const fermetModularInverse = require('../../../src').algorithms.math.modularInverse.fermetModularInverse;

const assert = require('assert');

describe('Modular Inverse', () => {
  it('should return `null` for either or both numbers as 0', () => {
    assert.equal(modularInverse(0, 10), null);
    assert.equal(modularInverse(10, 0), null);
    assert.equal(modularInverse(0, 0), null);
  });

  it('should return modular inverse of two numbers', () => {
    assert.equal(modularInverse(3, 11), 4);
    assert.equal(modularInverse(65, 11), 10);
    assert.equal(modularInverse(3, 2), 1);
  });

  it('should return `null` for either or both numbers as 0', () => {
    assert.equal(fermetModularInverse(0, 10), null);
    assert.equal(fermetModularInverse(10, 0), null);
    assert.equal(fermetModularInverse(0, 0), null);
  });

  it('should return modular inverse of two numbers', () => {
    assert.equal(fermetModularInverse(3, 11), 4);
    assert.equal(fermetModularInverse(65, 11), 10);
    assert.equal(fermetModularInverse(3, 2), 1);
  });
});
