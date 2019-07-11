/**
* Check if number is prime or not
* @param  {Number} a number to be checked
* @return {Number}  true or false
*/
const isPrime = (a) => {

  // because 0, 1 and any even number > 2 are not primes
  if (a === 1 || a === 0 || (a > 2 && a % 2 === 0)) {
    return false;
  }

  const root = Math.sqrt(a); // cashe root
  for (let i = 3; i <= root; i+= 2) {
    if (a % i === 0) {
      return false;
    }
  }

  return true;
};

module.exports = isPrime;
