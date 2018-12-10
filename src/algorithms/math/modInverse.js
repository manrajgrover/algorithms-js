/**
 * Creates changeable object
 * @param  {Number} value value to store
 */
function Changeable(value) {
    this.v = value;
}

/**
 * Calculates GCD of numbers a and b. Also calculates coefficients needed to calculate modular multiplicative inverse
 * @param  {Number} a first number
 * @param  {Number} b second number
 * @param  {Changeable} x first coefficient
 * @param  {Changeable} y second coefficient
 * @return {Number} GCD
 */
function gcd(a, b, x, y) {
	if (a == 0) {
        x.v = 0;
        y.v = 1;
		return b;
	}
    let d = gcd (b % a, a, x, y);
    let t = x.v;
	x.v = y.v - (Math.floor(b / a) * x.v);
	y.v = t;
	return d;
}

/**
 * Calculates modular multiplicative inverse of number a with respect of modulus m
 * @param  {Number} a number to calculate modular multiplicative inverse of
 * @param  {Number} m modulus
 * @return {Number} modular multiplicative inverse
 */
const modInverse = (a, m) => {
    let x = new Changeable();
    let y = new Changeable();
    if (gcd(a, m, x, y) > 1) {
        return 0;
    }
    if (x.v < 0) {
        x.v += m;
    }
    return x.v;
};

module.exports = modInverse;
