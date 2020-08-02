/**
 * Calculates if number is prime
 * @param  {Number} a First number
 */
const isPrime = num => {
  for(let i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num !== 1 && num !== 0;
};

module.exports = isPrime;
