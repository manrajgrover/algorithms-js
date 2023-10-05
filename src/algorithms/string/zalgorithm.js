/**
 * @param {string} text
 * @param {string} pattern
 * @return {Array.<Number>|null}    returns a list of index which is the begginning of the pattern
*/
const zAlgorithm = (text, pattern) => {
  if (!text || !pattern) { return null; }

  const str = pattern + '$' + text;
  const z = new Array(str.length).fill(0);

  let l = 0;
  let r = 1;
  let k = 0;

  for (let i = 0; i < z.length; i++) {
    if (i > r) {
      l = r = i;
      while (r < z.length && str[r-l] === str[r]) {
        r++;
      }
      z[i] = r-l;
      r--;
    }
    else {
      k = i-l;
      if (z[k] < r-i+1) {
        z[i] = z[k];
      }
      else {
        l = i;
        while (r < z.length && str[r-l] === str[r]) {
          r++;
        }
        z[i] = r-l;
        r--;
      }
    }
  }

  let ret = [];
  for (let i = 0; i < z.length; i++) {
    if (z[i] >= pattern.length) {
      ret.push(i - pattern.length - 1);
    }
  }

  return ret;
};

module.exports = zAlgorithm;
