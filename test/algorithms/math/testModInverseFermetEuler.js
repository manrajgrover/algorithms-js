/* eslint-env mocha */
const modInverseFermetEuler = require('../../../src').algorithms.math.modInverseFermetEuler;
const assert = require('assert');
describe('Modular Inverse', () => {
  it('should return 0 for not co-prime numbers', () => {
    assert.deepEqual(modInverseFermetEuler(3, 6), 0);
    assert.deepEqual(modInverseFermetEuler(10, 5), 0);
  });
  it('should work for co-prime numbers', () => {
    assert.deepEqual(modInverseFermetEuler(3, 7), 5);
    assert.deepEqual(modInverseFermetEuler(10, 13), 4);
    assert.deepEqual(modInverseFermetEuler(13, 21), 13);
  });
});
