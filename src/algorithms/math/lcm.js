const gcd = require('./gcd');

/**
 * Calculates LCM of two numbers
 * @param  {Number} a First number
 * @param  {Number} b Second number
 * @return {Number}   LCM of two numbers
 */
const lcm = (a, b) => {
  if (a === 0 || b === 0) {
    return 0;
  }
  a = Math.abs(a);
  b = Math.abs(b);
  return (a * b) / gcd(a, b);
};

module.exports = lcm;
