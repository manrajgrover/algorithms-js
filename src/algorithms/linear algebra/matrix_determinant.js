/**
 * Determinant of a square matrix
 * @param  {Array}  mat input matrix
 * @param  {Number} n   no. of rows
 * @return {Number}     determinant
 */
const create2dArr = (len) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push([]);
  }
  return arr;
};

const getCoMatrix = (mat, p, q, len) => {
  let i = 0;
  let j = 0;
  const coMatrix = create2dArr(len);

  for (let row = 0; row < len; row++) {
    for (let col = 0; col < len; col++) {
      // copy into temporary matrix
      if (row !== p && col !== q) {
        coMatrix[i][j++] = mat[row][col];

        // one row filled, go to next one
        if (j === len - 1) {
          j = 0;
          i++;
        }
      }
    }
  }

  return coMatrix;
};

const matrixDeterminant = (mat, len) => {
  let D = 0;
  // to store co matrices
  let coMat;
  // to toggle signs
  let sign = 1;

  // check whether it is square or not
  if (len !== mat[0].length) {
    throw new Error('Not a square matrix!');
  }

  // base case: if matrix contains single element
  if (len === 1) { return mat[0][0]; }

  // iterate for each element of first row
  for (let f = 0; f < len; f++) {
    // get co matrix
    coMat = getCoMatrix(mat, 0, f, len);
    D += sign * mat[0][f] * matrixDeterminant(coMat, len - 1);

    // toggle sign
    sign = -sign;
  }

  return D;
};

module.exports = matrixDeterminant;
