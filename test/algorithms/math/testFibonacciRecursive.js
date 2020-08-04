/* eslint-env mocha */
const assert = require('assert');

const fibRecursive = require('../../../src/algorithms/math/fibonacci_recursive');

describe('fibRecursive', () => {
  it('should return the fibonacci sum at the given number', () => {
    assert.equal(fibRecursive(0), 0);
    assert.equal(fibRecursive(1), 1);
    assert.equal(fibRecursive(7), 13);
    assert.equal(fibRecursive(15), 610);
    assert.equal(fibRecursive(20), 6765);
  });
});
