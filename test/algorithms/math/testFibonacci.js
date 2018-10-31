/* eslint-env mocha */
const fibonacci = require('../../../src/algorithms/math/fibonacci');
const assert = require('assert');

describe('fibonacci', () => {
  it('returns 0 if given number is 0', () => {
    assert.deepStrictEqual(fibonacci(0), [0]);
  });
  it('if the number is negative, returns an error', () => {
    assert.throws(() => fibonacci(-5));
  });
  it('returns a fibonacci sequence up to 10', () => {
    assert.deepStrictEqual(fibonacci(10), [0, 1, 1, 2, 3, 5, 8]);
  });
  it('returns fibonacci sequence up to 100', () => {
    assert.deepStrictEqual(fibonacci(100), [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]);
  });
});
