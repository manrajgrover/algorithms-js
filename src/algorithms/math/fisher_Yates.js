/**
 * Shuffle array in-place using Fisher-Yates Algorithm
 * @param  {Array} array Array to be shuffled
 * @return {Array}   Shuffled Array
 *
 */
const Shuffle = (array) => {
  let currentIndex = array.length;
  let randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
};

module.exports = Shuffle;
