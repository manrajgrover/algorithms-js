const gcd = require('./gcd');

/**
 * Euler's totient function counts the positive integers
 * up to a given integer n that are relatively prime to n.
 * @param  {Number} n n
 * @return {Number}   The amount of positive integers relatively prime to n
 */

 const phi = (n) => {
     if(n > 0)
     {
        result = 1;
        for(i = 2; i < n; i++)
        {
            if(gcd(i,n) == 1)
            {
                result++;
            }
        }
        return result;
    }
 };

 module.exports = phi;