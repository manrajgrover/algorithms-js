/* eslint-env mocha */
const euler = require('../../../src').algorithms.math.euler;

const assert = require('assert');

describe('Euler\'s Totient Function', () => {
  it('should return 0 if n < 1', () => {
    assert.deepEqual(euler(-1), 0);
    assert.deepEqual(euler(0), 0);
  });

  it('should return 1 if n == 1', () => {
    assert.deepEqual(euler(1), 1);
  });

  it('should work for prime numbers', () => {
    assert.deepEqual(euler(2), 1);
    assert.deepEqual(euler(3), 2);
    assert.deepEqual(euler(5), 4);
    assert.deepEqual(euler(7), 6);
  });

  it('should work for composite numbers', () => {
    assert.deepEqual(euler(6), 2);
    assert.deepEqual(euler(10), 4);
    assert.deepEqual(euler(12), 4);
    assert.deepEqual(euler(54), 18);
  });
});
