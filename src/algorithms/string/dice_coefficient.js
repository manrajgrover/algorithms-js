const dicecoefficient = (l = '', r = '') => {
  if (l.length < 2 || r.length < 2) return 0;
  const lBigrams = new Map();
  for (let i = 0; i < l.length - 1; i += 1) {
    const bigram = l.substr(i, 2);
    const count = lBigrams.has(bigram)
      ? lBigrams.get(bigram) + 1
      : 1;
    lBigrams.set(bigram, count);
  }

  let intersectionSize = 0;
  for (let i = 0; i < r.length - 1; i += 1) {
    const bigram = r.substr(i, 2);
    const count = lBigrams.has(bigram)
      ? lBigrams.get(bigram)
      : 0;

    if (count > 0) {
      lBigrams.set(bigram, count - 1);
      intersectionSize += 1;
    }
  }
  return (2.0 * intersectionSize) / ((l.length) + (r.length - 2));
};

module.exports = dicecoefficient;
