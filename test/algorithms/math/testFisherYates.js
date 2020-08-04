/* eslint-env mocha */
const fisherYates = require('../../../src').algorithms.math.fisherYates;

const assert = require('assert');

describe('Fisher-Yates', () => {
  it('should return array with the same elements', () => {
    let arr1 = [1, 2, 3, 4, 5];
    const arr2 = arr1;
    fisherYates(arr1);
    arr1.sort();
    assert.deepEqual(arr1, arr2);
    arr1 = [];
    fisherYates(arr1);
    assert.deepEqual(arr1, []);
  });
});
