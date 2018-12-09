/**
 * Shuffles elements of a given array
 * @param  {Array} arr array to be shuffled
 *
 * References: https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
 */
const fisherYates = (arr) => {
  let length = arr.length;
  for (let i = 0; i < length; i += 1) {
    let j = i + Math.floor(Math.random() * (length - i));
    arr.unshift(arr.splice(j, 1)[0]);
  }
};

module.exports = fisherYates;
