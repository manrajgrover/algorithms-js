/**
 * Returns Longest Common Leading Substring of two strings
 * @param  {String} firstWord First string
 * @param  {String} secondWord Second string
 * @return {String} Longest common leading substring for given inputs
 */
function longestcommonleadingsubstring(word1 = '', word2 = '') {
  const end1 = word1.length - 1;
  const end2 = word2.length - 1;
  let pos = 0;
  while (pos <= end1 && pos <= end2) {
    if (word1[pos] !== word2[pos]) {
      return word1.substring(0, pos);
    }
    pos += 1;
  }
  return word1.substring(0, pos);
}

module.exports = longestcommonleadingsubstring;
