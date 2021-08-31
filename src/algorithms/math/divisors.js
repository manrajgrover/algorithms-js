/**
 * Calculates the list of divisors of a number in sorted order
 * @param  {Number} n number
 * @return {Array}   Array of Divisors
 * Time Complexity = O(n ^ 0.5)
 */
 const getDivisors = (n) => {
  let divisors = [];
  if (n < 1) return [];
  const tempArray = [];
  for (let i = 1; i * i <= n; i += 1) {
    if (n % i === 0) {
      divisors.push(i);
      if (i !== n / i) tempArray.push(n / i);
    }
  }
  divisors = divisors.concat(tempArray.reverse());
  return divisors;
};

module.exports = getDivisors;
