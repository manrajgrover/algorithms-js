/**
 * Jump Search Algorithm
 * @param  {Array}  sortedArray Sorted Array to be searched
 * @param  {Number} element     Element to be searched
 * @return {Number}             Index of the element, if found
 */
const jumpsearch = (sortedArray, element) => {
  const len = sortedArray.length;
  let step = Math.floor(Math.sqrt(len));
  let prev = 0;

  while (sortedArray[Math.min(step, len) - 1] < element) {
    prev = step;
    step += Math.floor(Math.sqrt(len));
    if (prev >= len) {
      return -1;
    }
  }

  while (sortedArray[prev] < element) {
    prev += 1;

    if (prev === Math.min(step, len)) {
      return -1;
    }
  }

  if (sortedArray[prev] === element) {
    return prev;
  }

  return -1;
};

module.exports = jumpsearch;
