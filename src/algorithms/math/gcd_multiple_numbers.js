/**
 * Calculates GCD of multiple numbers
 * @param  {Number, Number... Number}
 * @return {Number}   HCF or GCD of provided numbers
 *
 * References: https://www.geeksforgeeks.org/python-program-for-gcd-of-more-than-two-or-array-numbers/
 */
function gcd_multiple_numbers() {
  if (arguments.length < 2) {
    console.error(
      `Function gcd_multiple_numbers requires atleast 2 arguments, but only ${arguments.length} provided.`
    );
    return;
  }
  const GCD = (a, b) => {
    a = Math.abs(a);
    b = Math.abs(b);

    if (a === 0 || b === 0) {
      return 0;
    }

    if (a === b) {
      return a;
    }

    if (a > b) {
      return GCD(a - b, b);
    }

    return GCD(a, b - a);
  };

  num1 = arguments[0];
  num2 = arguments[1];
  let gcd = GCD(num1, num2);
  for (let i = 2; i < arguments.length; i++) {
    gcd = GCD(gcd, arguments[i]);
  }

  return gcd;
}

module.exports = gcd_multiple_numbers;
