/**
 * Ternary Search Algorithm
 * @param  {Array}  sortedArray Sorted Array to be searched
 * @param  {Number} element     Element to be searched
 * @return {Number}             Index of the element, if found
 */
const ternarysearch = (sortedArray, element) => {
  let left = 0;
  let right = sortedArray.length - 1;

  while (left <= right) {
    const firstMid = (left) + Math.floor((right - left) / 3);
    const secondMid = (firstMid) + Math.floor((right - left) / 3);

    if (sortedArray[firstMid] === element) {
      return firstMid;
    }
    if (sortedArray[secondMid] === element) {
      return secondMid;
    }

    if (sortedArray[firstMid] > element) {
      right = firstMid - 1;
    } else if (sortedArray[secondMid] < element) {
      left = secondMid + 1;
    } else {
      left = firstMid + 1;
      right = secondMid - 1;
    }
  }

  return -1;
};

module.exports = ternarysearch;
