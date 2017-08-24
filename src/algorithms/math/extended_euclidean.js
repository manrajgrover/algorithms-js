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
    return { gcd: b, x, y };
  }

  if (b === 0) {
    return { gcd: b, x: m, y: n };
  }

  let q;
  let gcd;
  let finalX;
  let finalY;

  while (terminate) {
    q = Math.round(a / b);
    a %= b;

    m -= q * x;
    n -= q * y;

    if (a === 0) {
      gcd = b;
      finalX = x;
      finalY = y;

      break;
    }

    q = Math.round(b / a);
    b %= a;

    x -= q * m;
    y -= q * n;

    if (b === 0) {
      gcd = a;
      finalX = m;
      finalY = n;

      break;
    }
  }

  return {
    gcd,
    x: finalX,
    y: finalY
  };
};

module.exports = extendedEuclidean;
