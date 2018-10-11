/* eslint-env mocha */
const CircleTangents = require('../../../src').algorithms.geometry.CircleTangents;

const assert = require('assert');

describe('Tangent Between Circles', () => {
  it('should return empty arrays if tangents do not exist (one circle is contained in the other)', () => {
    const circles = new CircleTangents(0, 0, 1, 0, 0, 0.5);
    assert.deepEqual(circles.tangents, [[], [], [], []]);
  });
});
