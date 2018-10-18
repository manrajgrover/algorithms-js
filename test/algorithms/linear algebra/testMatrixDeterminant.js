/* eslint-env mocha */
const matrixDeterminant = require('../../../src').algorithms.linearAlgebra.matrixDeterminant;

const assert = require('assert');

const matOK1 = [
  [1, 2, 3],
  [8, 9, 4],
  [7, 6, 5]
];

const matOK2 = [
  [1, 2, 3, 8],
  [8, 9, 4, 1],
  [7, 6, 5, 3],
  [2, 4, 5, 6]
];

const matNotOK = [
  [1, 2],
  [3, 4],
  [5, 6]
];

describe('Determinant of Matrix', () => {
  it('should throw an error if the matrix is not a square', () => {
    assert.throws(() => matrixDeterminant(matNotOK, matNotOK.length));
  });

  it('should return appropriate determinant for 3x3 matrix', () => {
    assert.equal(matrixDeterminant(matOK1, matOK1.length), -48);
  });

  it('should return appropriate determinant for 4x4 matrix', () => {
    assert.equal(matrixDeterminant(matOK2, matOK2.length), 347);
  });
});
