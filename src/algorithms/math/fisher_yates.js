/**
 * https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
 * Performs Fisher Yates shuffle on the given array
 * @param  {Array} arr An array of integers
 */
const fisherYates = (arr) => {
  const l = arr.length;
  for (let i = l - 1; i >= 1; i -= 1) {
    const j = Math.floor((Math.random() * i));
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
};

module.exports = fisherYates;
