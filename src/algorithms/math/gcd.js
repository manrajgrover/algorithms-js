/**
 * Calculates GCD of two numbers
 * @param  {Number} a First number
 * @param  {Number} b Second number
 * @return {Number}   HCF or GCD of two numbers
 *
 * References: https://math.stackexchange.com/questions/927050/can-we-find-the-gcd-of-a-positive-and-negative-number
 */
const gcd = (a, b) => {
  a = Math.abs(a);
  b = Math.abs(b);

  if (a === 0 || b === 0) {
    return 0;
  }

  if (a === b) {
    return a;
  }

  if (a > b) {
    return gcd(a - b, b);
  }

  return gcd(a, b - a);
};

module.exports = gcd;
