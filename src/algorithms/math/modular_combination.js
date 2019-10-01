const fermetModularInverse = require('./modular_inverse').fermetModularInverse;

/**
 * Calculates modular combination (n, r, p), i.e. Binomial coefficient (n, r) modulo p,
 * using Fermat's little theorem
 *
 * @param  {Number} n Number of items in collection
 * @param  {Number} r Number of items in selection
 * @param  {Number} p Mod val
 * @return {Number}   Modular Combination
 */
const modularCombination = (n, r, p) => {
  if (r > n || p === 0) return null;

  let num = 1;
  let den = 1;

  for (let i = 0; i < r; i += 1) {
    num = (num * (n - i)) % p;
    den = (den * (i + 1)) % p;
  }

  return (num * fermetModularInverse(den, p)) % p;
};

module.exports = modularCombination;
