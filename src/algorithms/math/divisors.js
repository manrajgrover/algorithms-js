const divisors = (n = 1) => {
  let divi = [1];
  let d = 2;
  while (d <= n) {
    if (n % d === 0) {
      divi.push(d);
    }
  }

  return divi;
};

module.exports = divisors;
