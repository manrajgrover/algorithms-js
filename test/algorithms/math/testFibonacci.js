/* eslint-env mocha */
const gcd = require('../../../src').algorithms.math.fibonacci;

const assert = require('assert');

describe('fibonacci', () => {
  it('should return 1', () => {
    assert.equal(fibonacci(0), 1);
  });

  it('should return 55', () => {
    assert.equal(fibonacci(9), 55);
  });

  it('should return 233', () => {
    assert.equal(fibonacci(12), 233);
  });

  it('should return 20365011074', () => {
    assert.equal(fibonacci(50), 20365011074);
  });
});