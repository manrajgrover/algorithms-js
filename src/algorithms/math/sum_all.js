/**
 * Calculates the sum of all numbers in an array
 * @param  {Array} arr of two ints where arr[0] start, arr[1] end
 * @return {Number}  sum sum of the range of numberse
 */
const sumall = (arr) => {
  var sum = 0;
  var min = arr[0];
  var max = arr[1];
  var i =0;
  for (i = min; i <= max; i = i + 1) {
    sum = sum + i;
  }
  return sum;
};

module.exports = sumall;
