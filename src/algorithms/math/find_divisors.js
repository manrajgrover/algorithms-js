/**
 * Finds the positive divisors of a given number
 * @param  {Number} n   Number n
 * @return {Array}   Sorted array of divisors
 */
const findDivisors = (n) => {
  const divisors = [];
  if (n < 0) {
    n = -n;
  }
  if (n === 0) {
    return undefined;
  }
  if (n === 1) {
    return [1];
  }
  divisors.push(1);
  divisors.push(n);
  // Iterate from 2 to ceil(sqrt(n)), this will skip a factor if n is a square number
  // We skip the factor sqrt(n) in the loop as we don't want to add it twice
  for (let i = 2; i < Math.ceil(Math.sqrt(n)); i += 1) {
    if (n % i === 0) {
      divisors.push(i);
      divisors.push(n / i);
    }
  }
  // Re-add the skipped factor
  const sq = Math.floor(Math.sqrt(n));
  if (n === sq * sq) {
    divisors.push(sq);
  }
  divisors.sort((a, b) => a - b);
  return divisors;
};

module.exports = findDivisors;
