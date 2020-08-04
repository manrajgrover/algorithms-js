/**
 * Checks in given number is prime
 * @param  {Number} n Number
 * @return {Boolean} Returns true for prime number, for other false
 */
function isprime(n) {
  if (n < 2) return false;
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return n > 1;
}

module.exports = isprime;
