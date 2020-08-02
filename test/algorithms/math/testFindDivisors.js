/* eslint-env mocha */
const findDivisors = require('../../../src').algorithms.math.findDivisors;
const assert = require('assert');

describe('FindDivisors', () => {
  it('should return array of divisors for any positive n', () => {
    assert.deepEqual(findDivisors(4), [1, 2, 4]);
    assert.deepEqual(findDivisors(12), [1, 2, 3, 4, 6, 12]);
    assert.deepEqual(findDivisors(28), [1, 2, 4, 7, 14, 28]);
  });

  it('should return empty array for n == 0', () => {
    assert.deepEqual(findDivisors(0), []);
  });

  it('should return array of divisors for negative n treating n as positive', () => {
    assert.deepEqual(findDivisors(-4), [1, 2, 4]);
    assert.deepEqual(findDivisors(-12), [1, 2, 3, 4, 6, 12]);
    assert.deepEqual(findDivisors(-28), [1, 2, 4, 7, 14, 28]);
  });
});
