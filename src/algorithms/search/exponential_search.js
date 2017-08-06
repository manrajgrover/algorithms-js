const binarysearch = require('./binary_search');

/**
 * Exponential Search Algorithm
 * @param  {Array}  sortedArray Sorted Array to be searched
 * @param  {Number} element     Element to be searched
 * @return {Number}             Index of the element, if found
 */
const exponentialsearch = (sortedArray, element) => {
  if (sortedArray[0] === element) {
    return 0;
  }

  const len = sortedArray.length;

  let i = 1;

  while (i < len && sortedArray[i] < element) {
    i *= 2;
  }

  return binarysearch(sortedArray, element, Math.floor(i / 2), Math.min(i, len));
};

module.exports = exponentialsearch;
