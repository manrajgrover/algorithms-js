const exEuclidean = require('./extended_euclidean');
const fastExp = require('./fast_exp');


/**
 * Calculates modular inverse of a number using Fermet's theorem
 *
 * @param  {Number} a Number for which inverse needs to be found
 * @param  {Number} m Mod val
 * @return {Number}   Modular Inverse
 */
const fermetModularInverse = (a, m) => {
  if (a === 0 || m === 0) {
    return null;
  }

  return fastExp(a, m - 2, m);
};

/**
 * Calculates modular inverse of a number
 *
 * @param  {Number} a Number for which inverse needs to be found
 * @param  {Number} m Mod val
 * @return {Number}   Modular Inverse
 */
const modularInverse = (a, m) => {
  if (a === 0 || m === 0) {
    return null;
  }

  const result = exEuclidean(a, m);

  if (result.gcd !== 1) {
    return null;
  }

  return (result.x + m) % m;
};

module.exports = {
  fermetModularInverse,
  modularInverse
};
