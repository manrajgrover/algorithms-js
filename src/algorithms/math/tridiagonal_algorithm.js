/**
 * Extracts the tridiagonal coefficients from
 * a square matrix A. Pads the upper and lower
 * diagonal arrays to ensure all three diagonals
 * are of equal length.
 * @param {Array} A Square matrix.
 * @param {boolean} pad If true, pads lower and upper diagonal arrays.
 * @returns {Object} Returns object with keys `lowerDiagonal`,
 *                   `centralDiagonal` and `upperDiagonal`.
 */
const extractTridiagonalCoefficients = (A, pad = false) => {
  const n = A.length;
  const upperDiag = [A[0][1]];
  const diag = [A[0][0]];
  const lowerDiag = [];
  // padding lower diag vector if padding enabled.
  if (pad) {
    lowerDiag.push(0);
  }

  // Extracting diagonal values.
  for (let i = 1; i < n - 1; i += 1) {
    upperDiag.push(A[i][i + 1]);
    diag.push(A[i][i]);
    lowerDiag.push(A[i][i - 1]);
  }

  // Padding upper diag vector if padding enabled.
  if (pad) {
    upperDiag.push(0);
  }
  diag.push(A[n - 1][n - 1]);
  lowerDiag.push(A[n - 1][n - 2]);

  return {
    lowerDiagonal: lowerDiag,
    centralDiagonal: diag,
    upperDiagonal: upperDiag
  };
};

/**
 * Solves a linear system Ax=b where A is a tridiagonal matrix.
 *
 * Note: the method is only stable in some special cases
 * such as when the matrix is diagonally dominant or symmetric
 * positive definite (See reference).
 * For an algorithm stable in the general case, see:
 * http://www2.stat.duke.edu/~sayan/863/lec/linsys.pdf
 *
 * @param {Array} A Tridiagonal Maxtrix.
 * @param {Array} d Vector of values.
 * @return array representing the solution vector x.
 *          Returns null if system is singular.
 *
 * Reference: https://en.wikipedia.org/wiki/Tridiagonal_matrix_algorithm
 */
const tridiagonalAlgorithm = (A, d) => {
  // Extracting the diagonals.
  const n = A.length;
  const diagonals = extractTridiagonalCoefficients(A, true);
  const a = diagonals.lowerDiagonal;
  const b = diagonals.centralDiagonal;
  const c = diagonals.upperDiagonal;

  // Solution vector.
  const x = new Array(n);
  let w = 0;
  // Forward sweep.
  for (let i = 1; i < n; i += 1) {
    w = a[i] / b[i - 1];
    b[i] -= w * c[i - 1];
    d[i] -= w * d[i - 1];
  }
  // Back substitution.
  x[n - 1] = d[n - 1] / b[n - 1];
  for (let i = n - 2; i >= 0; i -= 1) {
    x[i] = (d[i] - (c[i] * x[i + 1])) / b[i];
  }

  // If solution has NaN's, return null.
  const nanValPresent = x.filter(val => isNaN(val)).length > 0;
  if (nanValPresent) {
    return null;
  }
  return x;
};

module.exports = tridiagonalAlgorithm;
