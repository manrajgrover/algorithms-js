/* eslint-env mocha */
const sumall = require('../../../src').algorithms.math.sumall;

const assert = require('assert');

describe('sumALL', () => {
  it('should return the sum of range', () => {
    assert.equal(sumall(2, 5), 14);
    assert.equal(sumall(1, 3), 6);
    assert.equal(sumall(3, 6), 18);
  });
});
