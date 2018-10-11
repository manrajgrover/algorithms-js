/* eslint-env mocha */
const CircleTangents = require('../../../src').algorithms.geometry.CircleTangents;

const assert = require('assert');

describe('Tangent Between Circles', () => {
  it('should return empty arrays if tangents do not exist (one circle is contained in the other)', () => {
    const circles = new CircleTangents(0, 0, 1, 0, 0, 0.5);
    assert.deepEqual(circles.tangents, [[], [], [], []]);
  });

  it('should return 2 external tangents (circles overlap)', () => {
    const tangents = new CircleTangents(0, 0, 1, 1, 0, 1).tangents;
    assert.deepEqual(tangents[0], [0, 1, 1, 1]);
    assert.deepEqual(tangents[1], [0, -1, 1, -1]);
    assert.deepEqual(tangents[2], []);
    assert.deepEqual(tangents[3], []);
  });
});
