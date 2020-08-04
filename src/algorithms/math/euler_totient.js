/**
 * Euler's totient function (phi) counts the number of integers less than n
 * which are relatively prime to n
 *
 * @param {Number} n the number
 * @return {Number} the number of integers less than n which are relatively prime to n
 */


const phi = (n) => {
  if (n < 0) return null;

  let num = n;
  let result = n;
  let p = 2;

  while (p * p <= num) {
    if (num % p === 0) {
      while (num % p === 0) {
        num = Math.floor(num / p);
      }
      result -= Math.floor(result / p);
    }
    p += 1;
  }

  if (num > 1) {
    result -= Math.floor(result / num);
  }

  return result;
};

module.exports = phi;
