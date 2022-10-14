/* eslint-env mocha */
const tridiagonalAlgorithm = require('../../../src/').algorithms.math.tridiagonalAlgorithm;

const assert = require('assert');

// Creates a square zero matrix of size n.
const createEmptyMatrix = (n) => {
  const zeroMatrix = new Array(n).fill(0);
  for (let i = 0; i < n; i += 1) {
    zeroMatrix[i] = new Array(n).fill(0);
  }
  return zeroMatrix;
};

// Creates an identity matrix of size n.
const generateIdentityMatrix = (n) => {
  const identityMatrix = createEmptyMatrix(n);
  for (let i = 0; i < n; i += 1) {
    identityMatrix[i][i] = 1;
  }
  return identityMatrix;
};

// Checks if two vectors are equal up to a tolerance value.
function equalUptoTolerance(a, b, tol = 0) {
  for (let i = 0; i < a.length; i += 1) {
    if (Math.abs(a[i] - b[i]) > tol) {
      return false;
    }
  }
  return true;
}

describe('Tridiagonal Algorithm', () => {
  it('should return vector of 1\'s', () => {
    const idMatrix4 = generateIdentityMatrix(4);
    const idMatrix7 = generateIdentityMatrix(7);
    const d4 = new Array(4).fill(1);
    const d7 = new Array(7).fill(1);
    assert.deepEqual(tridiagonalAlgorithm(idMatrix4, d4), d4);
    assert.deepEqual(tridiagonalAlgorithm(idMatrix7, d7), d7);
  });

  it('should return a vector of 0\'s', () => {
    const A = new Array(9);
    for (let i = 0; i < 9; i += 1) {
      A[i] = Array.from({ length: 9 }, () => 1 + Math.floor(Math.random() * 9));
    }
    const d = new Array(9).fill(0);
    assert.deepEqual(tridiagonalAlgorithm(A, d), d);
  });

  it('should return `null` for system with no solutions', () => {
    const idMatrix7 = generateIdentityMatrix(7);
    idMatrix7[6][6] = 0;
    const d = new Array(7).fill(1);
    assert.equal(tridiagonalAlgorithm(idMatrix7, d), null);
  });

  it('should return correct solution when diagnoally dominant.', () => {
    const testTridiagMatrix = [[3, 1, 0, 0],
      [1, 3, 1, 0],
      [0, 1, 3, 1],
      [0, 0, 1, 3]];
    const d = [2, 3, 3, 2];
    const expectedSol = [5 / 11, 7 / 11, 7 / 11, 5 / 11];
    assert.equal(equalUptoTolerance(tridiagonalAlgorithm(testTridiagMatrix, d),
      expectedSol, 1E-12), true);
  });

  it('should return correct solution when A is symmetric positive definite.', () => {
    const testTridiagMatrix = [[1, 3 / 4, 0],
      [3 / 4, 1, 3 / 4],
      [0, 3 / 4, 1]];
    const d = [1, 2, 3];
    const expectedSol = [-5, 8, -3];
    assert.equal(equalUptoTolerance(tridiagonalAlgorithm(testTridiagMatrix, d),
      expectedSol, 1E-12), true);
  });
});
