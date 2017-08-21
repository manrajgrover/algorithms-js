/**
 * The extended Euclidean algorithm is an algorithm to
 * compute integers x and y such that given a and b.
 * ax + by = gcd(a, b)
 * @param  {Number} a Coefficient of x
 * @param  {Number} b Coefficient of y
 * @return {Object}   Object containing value of x, y and gcd
 */
const extendedEuclidean = (a, b) => {
  let x = 1;
  let y = 0;
  let lastx = 0;
  let lasty = 1;
  let q;
  let r;
  let m;
  let n;

  while (a !== 0) {
    q = Math.floor(b / a);
    r = b % a;

    m = lastx - (q * x);
    n = lasty - (q * y);

    lastx = x;
    lasty = y;

    x = m;
    y = n;

    b = a;
    a = r;
  }

  return {
    gcd: b,
    x: lastx,
    y: lasty
  };
};

module.exports = extendedEuclidean;
