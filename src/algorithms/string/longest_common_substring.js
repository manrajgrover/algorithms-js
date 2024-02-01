const longestcommonsubstring = (a = '', b = '') => {
  let r = "";
  const al = a.length;
  const bl = b.length;

  for (let i = 0; i < al; i++) { 
    for (let j = 0; j < bl; j++) { 
      let cur = ""; 
      let x = i; 
      let y = j; 
      while (x < al && y < bl && a[x] === b[y]) { 
        cur += a[x]; 
        x++; 
        y++; 
      }
      if (cur.length > r.length) r = cur;
    } 
  }
  return r; 
}

module.exports = longestcommonsubstring;
