/* eslint-env mocha */
const assert = require('assert');

const fib = require('../../../src/algorithms/math/fibonacci');

describe('fib', () => {
  it('should return the fibonacci sum at the given number', () => {
    assert.equal(fib(0), 0);
    assert.equal(fib(1), 1);
    assert.equal(fib(7), 21);
    assert.equal(fib(15), 987);
    assert.equal(fib(100), 573147844013817200000);
  });
});
