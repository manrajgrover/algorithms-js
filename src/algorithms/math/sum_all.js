/**
 * Calculates the sum of all numbers in an array
 * @param  {Array} arr of two ints where arr[0] start, arr[1] end
 * @return {Number}  sum sum of the range of numberse
 */
const sumall = (arr) => {
  let sum = 0;
  const min = arr[0];
  const max = arr[1];
  let i = 0;
  for (i = min; i <= max; i += 1) {
    sum += i;
  }
  return sum;
};

module.exports = sumall;
