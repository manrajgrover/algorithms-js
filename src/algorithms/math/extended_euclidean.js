const floor = val => (val >= 0 || -1) * Math.floor(Math.abs(val));

/**
 * The extended Euclidean algorithm is an algorithm to
 * compute integers x and y such that given a and b.
 * ax + by = gcd(a, b)
 * @param  {Number} a Coefficient of x
 * @param  {Number} b Coefficient of y
 * @return {Object}   Object containing value of x, y and gcd
 */
const extendedEuclidean = (a, b) => {
  const terminate = 1;

  let x = 1;
  let y = 0;

  let m = 0;
  let n = 1;

  if (a === 0) {
    return { gcd: b, x: y, y: n };
  }

  if (b === 0) {
    return { gcd: a, x, y: m };
  }

  let q;
  let result = {
    gcd: undefined,
    x: undefined,
    y: undefined
  };

  while (terminate) {
    q = floor(a / b);
    a %= b;

    x -= q * y;
    m -= q * n;

    if (a === 0) {
      result = { gcd: b, x: y, y: n };
      break;
    }

    q = floor(b / a);
    b %= a;

    y -= q * x;
    n -= q * m;

    if (b === 0) {
      result = { gcd: a, x, y: m };
      break;
    }
  }

  return result;
};

module.exports = extendedEuclidean;
