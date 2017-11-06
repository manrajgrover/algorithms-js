const exEuclidean = require('./extended_euclidean');

/**
 * Calculates modular inverse of a number
 *
 * @param  {Number} a Number for which inverse needs to be found
 * @param  {Number} m Mod val
 * @return {Number}   Modular Inverse
 */
const modularInverse = (a, m) => {
  const result = exEuclidean(a, m);
  if (result.gcd !== 1) {
    return null;
  }

  return (result.x + m) % m;
};

module.exports = modularInverse;
