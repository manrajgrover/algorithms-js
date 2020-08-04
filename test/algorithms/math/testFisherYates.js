/* eslint-env mocha */
const fisherYates = require('../../../src').algorithms.math.fisherYates;
const assert = require('assert');

describe('Find Divisor', () => {
  it('should be able shuffle empty arrays', () => {
    const arr = [];
    fisherYates(arr);
    assert.equal(Array.isArray(arr), true);
    assert.equal(arr.length, 0);
  });

  it('should be able shuffle single element array', () => {
    const arr = [1];
    const arrCpy = arr.slice();
    fisherYates(arr);
    assert.equal(arrCpy.length, arr.length);
    arrCpy.forEach((elem) => {
      assert.equal(arr.indexOf(elem) !== -1, true);
    });
  });

  // Since fisherYates is a random shuffle
  // we check if all the elements are present after the shuffle
  it('should be able shuffle without loss of elements', () => {
    const arr = [1, 2, 3, 4, 5];
    const arrCpy = arr.slice();
    fisherYates(arr);
    assert.equal(arrCpy.length, arr.length);
    arrCpy.forEach((elem) => {
      assert.equal(arr.indexOf(elem) !== -1, true);
    });
  });
});
