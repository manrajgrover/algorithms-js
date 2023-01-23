/**
 * Checks if a num is prime or not
 * @param  {Number} num number to check
 * @return {Boolean} true if num is prime, false if num is not prime
 *
 * References: https://javascript.plainenglish.io/11-mathematical-algorithms-in-modern-javascript-bce71318e2da
 */
const isprime = num => {
    const limit = Math.floor(Math.sqrt(num));
    for (let i = 2; i <= limit; i++) {
        if (num % i === 0) return false;
    }
    return num >= 2;
};


module.exports = isprime;
