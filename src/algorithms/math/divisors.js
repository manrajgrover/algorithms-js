const divisors = (n = 1) => {
	let divisors = [1];
	let d = 2;
	while (d <= n) {
		if (n % d == 0) {
			divisors.push(d);
		}
	}

	return divisors;
};

module.exports = divisors;