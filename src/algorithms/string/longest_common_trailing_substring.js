/**
 * Returns Longest Common Trailing Substring of two strings
 * @param  {String} firstWord First string
 * @param  {String} secondWord Second string
 * @return {String} Longest common trailing substring for given inputs
 */
function longestcommontrailingsubstring(word1 = '', word2 = '') {
  let pos1 = word1.length - 1;
  let pos2 = word2.length - 1;

  while (pos1 >= 0 && pos2 >= 0) {
    if (word1[pos1] !== word2[pos2]) {
      return word1.substring(pos1 + 1);
    }
    pos1 -= 1;
    pos2 -= 1;
  }
  return word1.substring(pos1 + 1);
}

module.exports = longestcommontrailingsubstring;
