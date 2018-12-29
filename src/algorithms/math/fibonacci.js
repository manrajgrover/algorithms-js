function fib(n) {
  if (n === 0) {
    return 0;
  }
   let firstFib = 0;
   let secondFib = 1;

    while (n > 0) {
      const temp = secondFib;
      secondFib = firstFib + secondFib;
      firstFib = temp;

      n -= 1;
    }
    return secondFib;
}

module.exports = fib;
