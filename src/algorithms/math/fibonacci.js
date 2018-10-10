/**
 * Show fibonacci sequence up to a given number
 * @param {Number} num given number
 */
const fibonacci = (num) => {
    let n1 = 0, n2 = 1;
    let str = '';

    if (num < 0) {
        return 'Plz provide positive number';
    }

    while (n1 <= num) {
        str += `${n1} `;

        let sum = n1 + n2;
        n1 = n2;
        n2 = sum;
    }

    return str.trimEnd();
};

module.exports = fibonacci;