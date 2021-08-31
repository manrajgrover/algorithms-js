/* eslint-env mocha */
const Shuffle = require('../../../src').algorithms.math.Shuffle;

const assert = require('assert');

describe('Shuffle', () => {
  it('should return empty array for an empty array', () => {
    assert.deepEqual(Shuffle([]), []);
  });

  it('length of both the array should be same ', () => {
    const arr = [1, 2, 3];
    assert.deepEqual(Shuffle(arr).length, 3);
  });
});