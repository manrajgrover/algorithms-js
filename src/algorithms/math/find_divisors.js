/**
 * Calculates LCM of two numbers
 * @param  {Number} number the number you want to find it's divisors
 * @return {Array}   array of divisible numbers
 */
const findDivisors = (number) => {
    number = Math.abs(number)
    let i = 1;
    let divisors = [];

    while (i <= number) {
        if (number % i == 0) {
            divisors.push(i)
        }
        i += 1;
    }
    return divisors
}   

module.exports = findDivisors