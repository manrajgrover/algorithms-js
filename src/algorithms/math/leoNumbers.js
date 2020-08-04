/**
  * Outputs an array of leonardo numbers sequence
  * @param  {Number} n
  * @return {Array} leoArray
  * References: https://www.geeksforgeeks.org/leonardo-number/
*/

const leoNumbers = (n) => {
  const leoArray = [];
  let first = 1;
  let second = 1;
  if (n < 0) {
    throw new Error('N must be bigger than 0!');
  }
  if (n === 0 || n === 1) {
    leoArray[0] = 1;
    return leoArray;
  }
  while (first <= n) {
    leoArray.push(first);
    const sum = first + second + 1;
    first = second;
    second = sum;
  }
  return leoArray;
};

module.exports = leoNumbers;
