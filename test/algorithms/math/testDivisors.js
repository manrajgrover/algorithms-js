/* eslint-env mocha */
const divisors = require('../../../src').algorithms.math.divisors;

const assert = require('assert');

describe('Divisors', () => {
  it('should work for 1 and primes', () => {
    assert.deepEqual(divisors(1), [1]);
    assert.deepEqual(divisors(2), [1, 2]);
    assert.deepEqual(divisors(3), [1, 3]);
    assert.deepEqual(divisors(97), [1, 97]);
  });

  it('should work for big numbers', () => {
    assert.deepEqual(divisors(60), [1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60]);
  });
});
