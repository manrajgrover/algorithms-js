/**
 * Returns true if a number is a prime number. Returns false if a number is not a prime number.
 * @param  {Number}  a is the number to be checked
 * @return {Number} returns true or false
 * Reference: https://www.thepolyglotdeveloper.com/2015/04/determine-if-a-number-is-prime-using-javascript/
 */
const prime = (a) => {
    for(let i = 2; i < a; i++) {
        if(a % i === 0) {
            return false;
        }
    }
    return a > 1;
}

module.exports = prime;