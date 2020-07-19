/**
 * Interpolation Search Algorithm
 * @param  {Array}  sortedArray Sorted Array to be searched
 * @param  {Number} element     Element to be searched
 * @return {Number}             Index of the element, if found
 */
const interpolationsearch = (sortedArray, element) => {
  let left = 0;
  let right = sortedArray.length - 1;

  while ((left <= right) && (element >= sortedArray[left]) && (element <= sortedArray[right])) {
    const valDiff = sortedArray[right] - sortedArray[left];
    const posDiff = right - left;
    const elementDiff = element - sortedArray[left];

    const pos = left + ((posDiff * elementDiff) / valDiff || 0);

    if (sortedArray[pos] === element) {
      return pos;
    }

    if (sortedArray[pos] < element) {
      left = pos + 1;
    } else {
      right = pos - 1;
    }
  }

  return -1;
};

module.exports = interpolationsearch;
