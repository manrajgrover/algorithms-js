/* eslint-env mocha */
const phi = require('../../../src/algorithms/math/eulers_totient');

const assert = require('assert');

describe('Totient', () => {
  it('should return 1 for 1 and 2', () => {
    assert.equal(phi(1), 1);
    assert.equal(phi(2), 1);
  });

  it('should return the amount of numbers coprime up to n for n > 2', () => {
    assert.equal(phi(3), 2);
    assert.equal(phi(4), 2);
    assert.equal(phi(5), 4);
    assert.equal(phi(6), 2);
    assert.equal(phi(7), 6);
    assert.equal(phi(8), 4);
    assert.equal(phi(9), 6);
    assert.equal(phi(10),4);
  });
});
