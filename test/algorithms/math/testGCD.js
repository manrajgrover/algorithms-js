/* eslint-env mocha */
const gcd = require('../../../src').algorithms.math.gcd;

const assert = require('assert');

describe('GCD', () => {
  it('should return 0 for either or both numbers as 0', () => {
    assert.equal(gcd(0, 10), 0);
    assert.equal(gcd(10, 0), 0);
    assert.equal(gcd(0, 0), 0);
  });

  it('should return 1 for 1 and positive numbers >= 1', () => {
    assert.equal(gcd(1, 10), 1);
    assert.equal(gcd(1, 1), 1);
    assert.equal(gcd(10, 1), 1);
  });

  it('should return gcd of two numbers', () => {
    assert.equal(gcd(60, 10), 10);
    assert.equal(gcd(65, 10), 5);
    assert.equal(gcd(3, 2), 1);
  });
});
