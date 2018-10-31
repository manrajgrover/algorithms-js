/**
 * Outputs an array of fibonacci sequences
 * @param  {Number} num max number to decrement from until number hits 0
 * @return {Array} temp array of fibonacci sequences
 * References: https://medium.com/developers-writing/fibonacci-sequence-algorithm-in-javascript-b253dc7e320e
 */

const fibonacci = (num) => {
  let a = 0;
  let b = 1;
  const temp = [];
  if (num < 0) {
    throw new Error('Not a positive number');
  }
  while (a <= num) {
    temp.push(a);
    const sum = a + b;
    a = b;
    b = sum;
  }
  return temp;
};

module.exports = fibonacci;
