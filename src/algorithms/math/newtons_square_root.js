/** 
 * Calculates the square root of a number using Newton's 
 * recursive method.
 * 
 * @param {Number}  a           Number for which the square root needs to be found
 * @param {Integer} maxIter     The maximum number of iterations that the algorithm will repeat
 *                              unless the required accuracy is reached first.
 * @param {Number}  accuracy    The algorithm will run the necessary number of times 
 *                              the required accuracy is reached or until the max_iter is reached first.
 * @return {Number} The square root of a
 */

const newtonSquareRoot = (a, accuracy=0.0001, maxIter=1000) => {
    if (a < 0) {
        return NaN;
    }
    if (a === 0 || a === 1) {
        return a;
    }

    b = a / 2;
    iter = 0;

    const inner_func = (a, b) => {
        b = 0.5 * (b + a/b);
        iter++;

        if ( Math.abs(b - a) < accuracy || iter === maxIter) {
            return b;
        } else {
            return inner_func(a, b);
        }
    }

    return inner_func(a, b);  
};

module.exports = newtonSquareRoot;
