/**
 * Calculates sum of two sequential numbers for the length of num
 * @param  {Number} num max number to decrement from until number hits 0
 * @param  {Number} a initial first number 1
 * @param  {Number} b initial second number 0
 * @return {Number} temp updated sum of two numbers (a and b)
 * 
 * References: https://medium.com/developers-writing/fibonacci-sequence-algorithm-in-javascript-b253dc7e320e
 */

const fibonacci = (num) => {
    let a = 1,
      b = 0,
      temp;

    while (num >= 0) {
      temp = a;
      a = a + b;
      b = temp;
      num--;
    }

    return b;
  }

module.exports = fibonacci;