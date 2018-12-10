/* eslint-env mocha */
const modInverse = require('../../../src').algorithms.math.modInverse;

const assert = require('assert');

describe('Modular Inverse', () => {
  it('should return 0 for not co-prime numbers', () => {
    assert.deepEqual(modInverse(3, 6), 0);
    assert.deepEqual(modInverse(10, 5), 0);
  });
  it('should work for co-prime numbers', () => {
    assert.deepEqual(modInverse(3, 7), 5);
    assert.deepEqual(modInverse(10, 13), 4);
    assert.deepEqual(modInverse(13, 21), 13);
  });
});
