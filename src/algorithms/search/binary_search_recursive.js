/**
 * Binary Search Algorithm
 * @param  {Array}  sortedArray Sorted Array to be searched
 * @param  {Number} element     Element to be searched
 * @return {Number}             Index of the element, if found
 */
const binarysearchRecursive = (array, low, high, element) => {

  if (low > high) {
    return -1;
  }
  const uncalculatedMid = low + (high - low);
  const calculatedMid = uncalculatedMid / 2;
  const mid = Math.floor(calculatedMid);

  if (element === array[mid]) {
    return mid;
  } else if (element < array[mid]) {
    return binarysearchRecursive(array, low, mid - 1, element);
  }
    return binarysearchRecursive(array, mid + 1, high, element);
};

module.exports = binarysearchRecursive;
