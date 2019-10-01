/* eslint-env mocha */
const phi = require('../../../src').algorithms.math.eulerTotient;
const assert = require('assert');

describe('Euler Totient (phi)', () => {
  it('should return null for n < 0', () => {
    assert.equal(phi(-1), null);
    assert.equal(phi(-10), null);
    assert.equal(phi(-Infinity), null);
  });

  it('should return 0 for n = 0', () => {
    assert.equal(phi(0), 0);
  });

  it('should return phi(n) for n > 0', () => {
    assert.equal(phi(1), 1);
    assert.equal(phi(2), 1);
    assert.equal(phi(3), 2);
    assert.equal(phi(4), 2);
  });

  it('should return n-1 if n is prime', () => {
    assert.equal(phi(5), 4);
    assert.equal(phi(13), 12);
    assert.equal(phi(29), 28);
  });
});
