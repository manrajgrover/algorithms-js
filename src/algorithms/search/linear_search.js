/**
 * Linear Search Algorithm
 * @param  {Array}  array Array to be searched
 * @param  {Number} element     Element to be searched
 * @return {Number}             Index of the element, if found
 */
const linearsearch = (array, element) => {
  const len = array.length;

  for (let i = 0; i < len; i += 1) {
    if (array[i] === element) {
      return i;
    }
  }

  return -1;
};

module.exports = linearsearch;
