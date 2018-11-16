/**
* Check if number is prime or not
* @param  {Number} a number to be checked
* @return {Number}  true or false
*/
const isPrime = (a) => {
  for (let i = 2; i <= Math.sqrt(a); i++) {
    if (a % i === 0) {
      return false;
    }
  }

return (a > 1) ? true : false; 
};

module.exports = isPrime;
