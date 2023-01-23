/* eslint-env mocha */
const isprime = require('../../../src').algorithms.math.isprime;

const assert = require('assert');

describe('isPrime', () => {
  it('should return true if number is prime', () => {
    assert.equal(isprime(2), true);
    assert.equal(isprime(33), true);
    assert.equal(isprime(7), true);
    assert.equal(isprime(37), true);
  });
  it('should return false if number is prime', () => {
    assert.equal(isprime(16), false);
    assert.equal(isprime(36), false);
    assert.equal(isprime(100), false);
  });
});
