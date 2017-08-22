/* eslint-env mocha */
const extendedEuclidean = require('../../../src').algorithms.math.extendedEuclidean;

const assert = require('assert');

describe('Extended Euclidean', () => {
  it('should check for both numbers as 0', () => {
    assert.deepStrictEqual(extendedEuclidean(35, 15), { gcd: 5, x: 1, y: -2 });
  });
});
