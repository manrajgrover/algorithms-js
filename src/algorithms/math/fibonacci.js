function fib(n) {


  if (n == 0){
    return 0;
  }

  else {
    let i = 0;
    let fib_1 = 0;
    let fib_2 = 1;

    while (n > 0) {
      temp = fib_2;
      fib_2 = fib_1 + fib_2;
      fib_1 = temp;

      n--;
    }
    return fib_2;
  }
}

module.exports = fib;
