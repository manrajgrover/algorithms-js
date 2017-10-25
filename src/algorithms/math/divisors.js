const divisors = (n = 1) => {
  const divi = [1];
  let d = 2;
  while (d <= n) {
    if (n % d === 0) {
      divi.push(d);
    }
    d += 1;
  }

  return divi;
};

module.exports = divisors;
