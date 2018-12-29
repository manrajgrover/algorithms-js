/**
 * Binary Search Algorithm
 * @param  {Array}  sortedArray Sorted Array to be searched
 * @param  {Number} element     Element to be searched
 * @return {Number}             Index of the element, if found
 */
const binarysearchRecursive = (array, low, high, element) => {
  let mid;

  if (low > high) {
    return -1;
}

    mid = Math.floor(low + (high - low) / 2);

  if (element === array[mid]) {
    return mid;
} else if (element < array[mid]) {
    return binarysearchRecursive(array, low, mid - 1, element);
} else {
    return binarysearchRecursive(array, mid + 1, high, element);
}
};

module.exports = binarysearchRecursive;
