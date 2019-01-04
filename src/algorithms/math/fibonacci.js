/*
 * Finds the number at an index in the fibonacci sequence
 * @param  {Number} n Index to return
 * @return {Number}   Result
 */
const fibonacci = (n) => {
	var a = 1, b = 0, _;
	while (n >= 0) {
		_ = a;
		a += b;
		b = _;
		n--;
	}
	return b;
};

module.exports = fibonacci;