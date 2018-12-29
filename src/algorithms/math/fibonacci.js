function fib(n) {
  if (n === 0) {
    return 0;
  } else {
      let firstFib = 0;
      let secondFib = 1;

    while (n > 0) {
      let temp = secondFib;
      secondFib = firstFib + secondFib;
      firstFib = temp;

      n--;
    }
    return secondFib;
  }
}

module.exports = fib;
