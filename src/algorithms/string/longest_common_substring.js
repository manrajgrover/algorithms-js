/**
* Finds longest common substring of 2 string
* @param {string} first first string given
* @param {string} second second string given
* @return {string} return string
*/

const longestCommonSubstring = (first, second) => {
  if (first.length > second.length) {
    const temp = first;
    first = second;
    second = temp;
  }
  for (let i = first.length; i > 0; i -= 1) {
    for (let j = 0; j + i <= first.length; j += 1) {
      const cut = first.substring(j, i + 1);
      for (let k = 0; k <= second.length - cut.length; k += 1) {
        if (second.substring(k, k + cut.length) === cut) {
          return cut;
        }
      }
    }
  }
  return '';
};

module.exports = longestCommonSubstring;
