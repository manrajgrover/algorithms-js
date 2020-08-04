/**
 * Calculates sum of inverse numbers from 1 to n
 * @param  {Number} n First number
 * @param  {Number} precision precision number
 * @return {Number}   Sum of inverse numbers from 1 to n with specified precision
 *
 */
const nInverse = (n, precision) => {
  let sum = 0;
  // if n is 0 then return undefined
  if (n === 0) {
    return undefined;
  }
  // calculating the sum
  for (let i = 1; i <= n; i += 1) {
    sum += 1 / i;
  }
  // working with precision
  let x = 1;
  for (let i = 1; i <= precision; i += 1) {
    x *= 10;
  }
  // rounding the final result
  sum *= x;
  sum = Math.floor(sum);
  sum /= x;

  return sum;
};

module.exports = nInverse;
