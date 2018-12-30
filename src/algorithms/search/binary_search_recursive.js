/**
 * Binary Search Algorithm
 * @param  {Array}  sortedArray Sorted Array to be searched
 * @param  {Number} element     Element to be searched
 * @return {Number}             Index of the element, if found
 */
function binarysearchRecursive(array, low, high, num) {
  console.log(low, high);

  if (low > high) {
    return -1;
  }

  const midPoint = (high - low) / 2;
  let mid = Math.floor(low + midPoint);

  if (num === array[mid]) {
   return mid;
  } else if (num < array[mid]) {

      return binarysearchRecursive(array, low, mid - 1, num);
   }
      return binarysearchRecursive(array, mid + 1, high, num);
}

module.exports = binarysearchRecursive;
