/**
 * Raises base to a power keeping mod in check
 * @param  {Number} a   Base
 * @param  {Number} e   Power
 * @param  {Number} mod Mod Value
 * @return {Number}     Base to a power keeping mod in check
 */
const fastexp = (a, e, mod = 1e9 + 7) => {
  if (a === 0 && e === 0) {
    return undefined;
  }

  let res = 1;

  while (e !== 0) {
    if (e % 2 === 1) {
      res = (res * a) % mod;
    }

    a = (a * a) % mod;
    e >>= 1;
  }

  return res % mod;
};

module.exports = fastexp;
