const fastexp = require('./fast_exp');
const divisors = require('./divisors');

const isprime = (n = 1) => {
  if (n === 1) return false;
  else if (n === 2 || n === 3 || n === 5 || n === 7) return true;

  const firstPrimes = [2, 3, 5, 7, 11, 13, 17, 19];

  for (let i = 0; i <= 4; i += 1) {
    if (fastexp(firstPrimes[i], n - 1, n) !== 1) {
      return false;
    }
  }

  // else, try division
  // TODO: use sieve
  const d = divisors(n);
  if (n.length === 2) return true;
  return false;
};

module.exports = isprime;
