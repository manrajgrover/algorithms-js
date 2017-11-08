const exEuclidean = require('./extended_euclidean');
const fastExp = require('./fast_exp');

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

  console.log(result);

  return (result.x + m) % m;
};

module.exports = modularInverse;

/**
 * Calculates modular inverse of a number using Fermet's theorem
 *
 * @param  {Number} a Number for which inverse needs to be found
 * @param  {Number} m Mod val
 * @return {Number}   Modular Inverse
 */
const fermetModularInverse = (a, m) => fastExp(a, m - 2, m);

module.exports = fermetModularInverse;
