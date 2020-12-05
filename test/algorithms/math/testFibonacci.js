/* eslint-env mocha */
const fibonacci = require('../../../src').algorithms.math.fibonacci;

const assert = require('assert');

describe('Fibonacci', () => {
  it('Should return 0 for index 0', () => {
    assert.equal(fibonacci.fibonacciIterative(0), 0);
    assert.equal(fibonacci.fibonacciRecursive(0), 0);
  });

  it('Should return 8 for index 6', () => {
    assert.equal(fibonacci.fibonacciIterative(6), 8);
    assert.equal(fibonacci.fibonacciRecursive(6), 8);
  });

  it('Should return 144 for index 12', () => {
    assert.equal(fibonacci.fibonacciIterative(12), 144);
    assert.equal(fibonacci.fibonacciRecursive(12), 144);
  });
});