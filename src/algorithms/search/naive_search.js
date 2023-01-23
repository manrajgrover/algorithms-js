/**
 * Binary Search Algorithm
 * @param  {String} st          Array to be searched
 * @param  {String} pattern     Element to be searched
 * @return {Number} count       Frequency the pattern is in st
 */

const naivesearch = (st, pattern) => {
  let count = 0;
  for (let i = 0; i < st.length; i += 1) {
    for (let j = 0; j < pattern.length; j += 1) {
      if (st[i + j] !== pattern[j]) break;
      if (j === pattern.length - 1) count += 1;
    }
  }

  return count;
};

module.exports = naivesearch;
