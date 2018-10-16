/* eslint-env mocha */
const isprime = require('../../../src').algorithms.math.isprime;

const assert = require('assert');

describe('PrimeTest', () => {
  it('should return false for negative', () => {
    assert.equal(isprime(-1), false);
  });

  it('should return false for 0', () => {
    assert.equal(isprime(-1), false);
  });
  it('should return false for 2', () => {
    assert.equal(isprime(1), false);
  });

  it('should return true for 2', () => {
    assert.equal(isprime(2), true);
  });

  it('should return true for 3', () => {
    assert.equal(isprime(3), true);
  });

  it('should return true for 31', () => {
    assert.equal(isprime(31), true);
  });

  it('should return true for 97', () => {
    assert.equal(isprime(97), true);
  });

  it('should return true for 7919', () => {
    assert.equal(isprime(7919), true);
  });
});
