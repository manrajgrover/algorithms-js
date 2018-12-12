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

  it('should return gcd of negative numbers', () => {
    assert.equal(gcd(-60, -10), 10);
    assert.equal(gcd(65, -10), 5);
    assert.equal(gcd(-3, 2), 1);
  });

  it('should return "numbers must be integer! if at least one of the numbers is real', () => {
    assert.equal(gcd(1.33, 1), 'numbers must be integer!');
    assert.equal(gcd(13.3453, 0), 'numbers must be integer!');
    assert.equal(gcd(1.333, 3214.124), 'numbers must be integer!');
  });
});
