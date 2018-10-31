/**
 * Calculates sum of two sequential numbers for the length of num
 * @param  {Number} num max number to decrement from until number hits 0
 * @param  {Number} a initial first number 1
 * @param  {Number} b initial second number 0
 * @return {Number} temp updated sum of two numbers (a and b)
 * References: https://medium.com/developers-writing/fibonacci-sequence-algorithm-in-javascript-b253dc7e320e
 */

const fibonacci = (num) => {
  let a = 0;
  let b = 1;
  const temp = [];
   if (num < 0) {
    throw new Error('Not a positive number');
  };
   while (a <= num) {
    temp.push(a);
     const sum = a + b;
    a = b;
    b = sum;
  };
   return temp;
};

module.exports = fibonacci;
