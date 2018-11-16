/**
* Check if number is prime or not
* @param  {Number} a number to be checked
* @return {Number}  true or false
*/
const isPrime = (a) => {
  for (let i = 2; i <= Math.sqrt(a); i+= 1) {
    if (a % i === 0) {
      return false;
    }
  }

  if (a === 1 || a === 0) {
    return false;
  }

  return true;
};

module.exports = isPrime;
