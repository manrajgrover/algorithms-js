/* eslint-env mocha */
const fisherYates = require('../../../src').algorithms.math.fisherYates.fisherYates;

const assert = require('assert');

describe('Fisher-Yates', () => {
  it('should return array with the same elements', () => {
    let arr1 = [1, 2, 3, 4, 5];
    let arr2 = arr1;
    fisherYates(arr1);
    arr1.sort();
    assert.equal(arr1, arr2);
    arr1 = [];
    fisherYates(arr1);
    assert.equal(arr1, []);
  });
});
