/* eslint-env mocha */
const getDivisors = require('../../../src').algorithms.math.getDivisors;

const assert = require('assert');

describe('Divisors', () => {
  it('should return empty array for number 0', () => {
    assert.deepEqual(getDivisors(0), []);
  });

  it('should return [] for negative numbers ', () => {
    assert.deepEqual(getDivisors(-3), []);
  });

  it('should return [1] for 1', () => {
    assert.deepEqual(getDivisors(1), [1]);

  });

  it('should return divisors of a number', () => {
    assert.deepEqual(getDivisors(100), [1, 2, 4, 5, 10, 20, 25, 50, 100]);
    assert.deepEqual(getDivisors(10), [1, 2, 5, 10]);
    assert.deepEqual(getDivisors(125), [1, 5, 25, 125]);
  });
});