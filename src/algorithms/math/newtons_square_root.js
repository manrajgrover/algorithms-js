/**
 * Calculates the square root of a number using Newton's
 * recursive method.
 *
 * @param {Number}  a           Number for which the square root needs to be found
 * @param {Integer} maxIter     The maximum number of iterations that the algorithm will repeat
 *                              unless the required accuracy is reached first.
 * @param {Number}  accuracy    The algorithm will run the necessary number of times
 *                              the required accuracy is reached or until the max_iter is
 *                              reached first.
 * @return {Number} The square root of a
 */

const newtonSquareRoot = (a, accuracy = 0.0001, maxIter = 1000) => {
  if (a < 0) {
    return NaN;
  }
  if (a === 0 || a === 1) {
    return a;
  }

  const b = a / 2;
  let iter = 0;

  const innerFunc = (num, guess) => {
    guess = 0.5 * (guess + (num / guess));
    iter += 1;

    if (Math.abs(guess - num) < accuracy || iter === maxIter) {
      return guess;
    }
    return innerFunc(num, guess);
  };

  return innerFunc(a, b);
};

module.exports = newtonSquareRoot;
