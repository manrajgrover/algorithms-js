/* eslint-env mocha */
const isPrime = require('../../../src').algorithms.math.isPrime;
const assert = require('assert');

describe('', () => {
  it('should be able handle even numbers', () => {
    assert.equal(isPrime(12345678), false);
  });

  it('should be able handle odd numbers', () => {
    assert.equal(isPrime(123456789), false);
  });

  it('should be able handle 2', () => {
    assert.equal(isPrime(2), true);
  });

  it('should be able handle 1', () => {
    assert.equal(isPrime(1), false);
  });

  it('should be able handle negative numbers', () => {
    assert.equal(isPrime(-7), false);
  });

  it('should be able handle prime numbers', () => {
    assert.equal(isPrime(101), true);
  });
});
