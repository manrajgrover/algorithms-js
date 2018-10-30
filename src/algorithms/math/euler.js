/**
 * Creates object storing pair divisor-power
 * @param  {Number} divisor divisor
 * @param  {Number} n power of divisor
 */
function Divisor(divisor, n) {
  this.d = divisor;
  this.p = n;
}

/**
 * Creates bitset object of a given number
 * Can return bit at index i and size of bitset
 * @param  {Number} n number to create bitset of
 */
function Bitset(n) {
  this.bitset = [];
  while (n !== 0) {
    this.bitset.unshift(n % 2);
    n = Math.floor(n / 2);
  }
  this.get = function (i) {
    return this.bitset[i];
  };
  this.getSize = function () {
    return this.bitset.length;
  };
}

/**
 * Raises number to a power
 * @param  {Number} base base
 * @param  {Number} n power
 * @return {Number}   base^n
 */
function power(base, n) {
  if (n === 0) {
    return 1;
  }
  const b = new Bitset(n);
  let i = 1;
  let result = base;
  while (i !== b.getSize()) {
    result *= result;
    if (b.get(i)) {
      result *= base;
    }
    i += 1;
  }
  return result;
}

/**
 * Implements factorization of a given number
 * @param  {Number} n number to factor
 * @return {Array}   array of pairs divisor-power
 */
function findDivisors(n) {
  const divisors = [];
  let i = 0;
  let m = 2;
  while (m <= Math.sqrt(n)) {
    while (n % m === 0) {
      n /= m;
      if (divisors.length === i) {
        divisors.push(new Divisor(m, 0));
      }
      divisors[i].p += 1;
    }
    m += 1;
    i = divisors.length;
  }
  if (n > 1) {
    divisors.push(new Divisor(n, 1));
  }
  return divisors;
}

/**
 * Calculates Euler's Totient Function of a given number
 * @param  {Number} n number to calculate Euler's Totient Function of
 * @return {Number}   Euler's Totient Function of n
 *
 * References: https://en.wikipedia.org/wiki/Euler%27s_totient_function
 */
const euler = (n) => {
  if (n < 1) {
    return 0;
  }
  const divisors = findDivisors(n);
  let result = 1;
  for (let i = 0; i < divisors.length; i += 1) {
    result *= power(divisors[i].d, divisors[i].p) - power(divisors[i].d, divisors[i].p - 1);
  }
  return result;
};

module.exports = euler;
