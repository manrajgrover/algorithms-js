/**
 * Show fibonacci sequence up to a given number
 * @param {Number} num given number
 */
const fibonacci = (num) => {
  let n1 = 0;
  let n2 = 1;
  const fibo = [];

  if (num < 0) {
    throw new Error('Not a positive number');
  }

  while (n1 <= num) {
    fibo.push(n1);

    const sum = n1 + n2;
    n1 = n2;
    n2 = sum;
  }

  return fibo;
};

module.exports = fibonacci;
