/**
 * Calculating square root of a number using Newton's Method
 * @param {Number} num number to find square root
 * @return {Number} square root of the given number
 */

const sqaureRoot = (num) => {
  if (num < 0) {
    throw new Error('Cannot calculate square root of negative number');
  }

  if (num === 0) {
    return 0;
  }

  let guess1 = 0.5 * num;
  let guess2 = 0.5 * (guess1 + (num / guess1));

  while (guess2 !== guess1) {
    guess1 = guess2;
    guess2 = 0.5 * (guess1 + (num / guess1));
  }

  return guess1;
};

module.exports = sqaureRoot;
