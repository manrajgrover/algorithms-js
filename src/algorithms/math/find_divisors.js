/**
 * Finds all divisors of an integer number
 * @param  {Number} n Find all divisors of n
 * @return {Array}   Array with divisors
 */

const findDivisors = (n) => {
  const result = [];
  let div = 1;
  if (n < 0) {
    n *= -1;
  }
  if (n === 0) {
    return [];
  }
  while (2 * div <= n) {
    if (n % div === 0) {
      result.push(div);
      div += 1;
    } else {
      div += 1;
    }
  }
  result.push(n);
  return result;
};

module.exports = findDivisors;
