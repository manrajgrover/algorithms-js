/**
 * Calculates GCD of two numbers
 * @param  {Number} a First number
 * @param  {Number} b Second number
 * @return {Number}   HCF or GCD of two numbers
 */
const gcd = (a, b) => {
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
