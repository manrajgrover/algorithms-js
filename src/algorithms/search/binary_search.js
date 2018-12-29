/**
 * Binary Search Algorithm
 * @param  {Array}  sortedArray Sorted Array to be searched
 * @param  {Number} element     Element to be searched
 * @return {Number}             Index of the element, if found
 */
const binarysearch = (sortedArray, element, left, right) => {
  left = left === undefined ? 0 : left;
  right = right === undefined ? sortedArray.length - 1 : right;

  while (left <= right) {
    const mid = (left) + ((right - left) >> 1);

    if (sortedArray[mid] === element) {
      return mid;
    }

    if (sortedArray[mid] < element) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};

module.exports = binarysearch;
