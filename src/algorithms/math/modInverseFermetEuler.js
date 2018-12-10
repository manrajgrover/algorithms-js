const euler = require('./euler');
/**
 * Creates changeable object
 * @param  {Number} value value to store
 */
function Changeable(value) {
  this.v = value;
}

/**
 * Calculates GCD of numbers a and b. Also calculates coefficients needed to
 * calculate modular multiplicative inverse
 * @param  {Number} a first number
 * @param  {Number} b second number
 * @param  {Changeable} x first coefficient
 * @param  {Changeable} y second coefficient
 * @return {Number} GCD
 */
function gcd(a, b, x, y) {
  if (a === 0) {
    x.v = 0;
    y.v = 1;
    return b;
  }
  const d = gcd(b % a, a, x, y);
  const t = x.v;
  x.v = y.v - (Math.floor(b / a) * x.v);
  y.v = t;
  return d;
}

/**
 * Calculates modular multiplicative inverse of number a with respect of
 * modulus m using Fermet-Euler theorem
 * @param  {Number} a number to calculate modular multiplicative inverse of
 * @param  {Number} m modulus
 * @return {Number} modular multiplicative inverse
 */
const modInverseFermet = (a, m) => {
  const x = new Changeable();
  const y = new Changeable();
  if (gcd(a, m, x, y) > 1) {
    return 0;
  }
  return Math.floor((a ** euler(m)) / (a * m));
};

module.exports = modInverseFermet;
