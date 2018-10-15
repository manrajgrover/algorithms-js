/**
 * Finds if the given number is prime or not
 * @param  {Number} n   Number n
 * @return {Boolean}   true if number is prime
 */
const isPrime = (n) => {
  if (n < 2) {
    return false;
  }
  if (n === 2) {
    return true;
  }
  // Check if number is even by checking if lower most bit is set
  if (!(n & 1)) {
    return false;
  }
  // Test only odd numbers as we know n is not even
  for (let i = 3; i <= Math.floor(Math.sqrt(n)); i += 2) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

module.exports = isPrime;
