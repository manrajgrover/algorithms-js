const gcd = require('./gcd');

const lcm = (a, b) => (a * b) / gcd(a, b);

module.exports = lcm;
