/* eslint-env mocha */
const convexHull = require('../../../src').algorithms.geometry.convexHull;

const assert = require('assert');

describe('Convex Hull', () => {
  it('should work for 1 to 3 points', () => {
    assert.deepEqual(convexHull([{ x: 0, y: 0 }]), [{ x: 0, y: 0 }]);
    assert.deepEqual(convexHull([{ x: 0, y: 0 }, { x: 1, y: 0 }]),
      [{ x: 0, y: 0 }, { x: 1, y: 0 }]);
    assert.deepEqual(convexHull([{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 1, y: 1 }]),
      [{ x: 1, y: 1 }, { x: 1, y: 0 }, { x: 0, y: 0 }]);
  });

  it('should work for points on one line', () => {
    assert.deepEqual(convexHull([{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }]),
      [{ x: 2, y: 0 }, { x: 0, y: 0 }]);
    assert.deepEqual(convexHull([{ x: 3, y: 0 }, { x: 0, y: 0 }, { x: 1, y: 0 },
      { x: 2, y: 0 }]), [{ x: 3, y: 0 }, { x: 0, y: 0 }]);
  });

  it('should work for empty bottom part', () => {
    assert.deepEqual(convexHull([{ x: 0, y: 0 }, { x: 4, y: 0 }, { x: 3, y: 2 },
      { x: 1, y: 2 }, { x: 2, y: 3 }, { x: 2, y: 1 }]),
    [{ x: 1, y: 2 }, { x: 2, y: 3 }, { x: 3, y: 2 }, { x: 4, y: 0 }, { x: 0, y: 0 }]);
  });

  it('should work for empty upper part', () => {
    assert.deepEqual(convexHull([{ x: -3, y: 2 }, { x: 3, y: 2 }, { x: -1, y: 1 },
      { x: 1, y: 1 }, { x: -2, y: -1 }, { x: 2, y: -1 }]),
    [{ x: 3, y: 2 }, { x: 2, y: -1 }, { x: -2, y: -1 }, { x: -3, y: 2 }]);
  });

  it('should exclude point that is between 2 points belonging to hull when hull is not a line',
    () => {
      assert.deepEqual(convexHull([{ x: -3, y: 2 }, { x: -1, y: -1 }, { x: 0, y: 3 }, { x: 1, y: 1 },
        { x: -1, y: -1 }, { x: -2, y: -2 }, { x: -1, y: -3 }, { x: 0, y: -2 }, { x: 1, y: -1 },
        { x: 2, y: -2 }, { x: 1, y: -3 }, { x: 3, y: -5 }]), [{ x: 0, y: 3 }, { x: 1, y: 1 },
        { x: 3, y: -5 }, { x: -1, y: -3 }, { x: -2, y: -2 }, { x: -3, y: 2 }]);
    });
});
