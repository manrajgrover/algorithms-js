/* eslint-env mocha */
const extendedEuclidean = require('../../../src').algorithms.math.extendedEuclidean;

const assert = require('assert');

describe('Extended Euclidean', () => {
  it('should check for numbers as 0', () => {
    assert.deepStrictEqual(extendedEuclidean(35, 0), { gcd: 35, x: 1, y: 0 });
    assert.deepStrictEqual(extendedEuclidean(0, 15), { gcd: 15, x: 0, y: 1 });
    assert.deepStrictEqual(extendedEuclidean(0, 0), { gcd: 0, x: 0, y: 1 });
  });

  it('should check extended euclidean values for positive values of a and b', () => {
    assert.deepStrictEqual(extendedEuclidean(35, 15), { gcd: 5, x: 1, y: -2 });
    assert.deepStrictEqual(extendedEuclidean(32, 1), { gcd: 1, x: 0, y: 1 });
    assert.deepStrictEqual(extendedEuclidean(1, 32), { gcd: 1, x: 1, y: 0 });
  });

  it('should check extended euclidean values for negative values of a and b', () => {
    assert.deepStrictEqual(extendedEuclidean(35, -15), { gcd: 5, x: 1, y: 2 });
    assert.deepStrictEqual(extendedEuclidean(-35, 15), { gcd: -5, x: 1, y: 2 });
    assert.deepStrictEqual(extendedEuclidean(-35, -15), { gcd: -5, x: 1, y: -2 });
  });
});
