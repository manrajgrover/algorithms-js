/* eslint-env mocha */
const lcm = require('../../../src').algorithms.math.lcm;

const assert = require('assert');

describe('LCM', () => {
  it('should return 0 for either or both numbers as 0', () => {
    assert.equal(lcm(0, 10), 0);
    assert.equal(lcm(10, 0), 0);
    assert.equal(lcm(0, 0), 0);
  });

  it('should return positive number for 1 and positive numbers >= 1', () => {
    assert.equal(lcm(1, 10), 10);
    assert.equal(lcm(1, 1), 1);
    assert.equal(lcm(10, 1), 10);
  });

  it('should return lcm of two numbers', () => {
    assert.equal(lcm(60, 10), 60);
    assert.equal(lcm(65, 10), 130);
    assert.equal(lcm(3, 2), 6);
  });

  it('should return lcm of negative numbers', () => {
    assert.equal(lcm(-60, -10), 60);
    assert.equal(lcm(65, -10), 130);
    assert.equal(lcm(-3, 2), 6);
  });
});
