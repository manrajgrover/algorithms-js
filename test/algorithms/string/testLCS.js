const LCS = require('../../../src').algorithms.string.lcs;
const assert = require('assert');

function lcs(lcstest, lcstarget) {
 matchfound = 0
 lsclen = lcstest.length
  for(lcsi=0; lcsi<lcstest.length; lcsi++){
   lscos=0
    for(lcsj=0; lcsj<lcsi+1; lcsj++){
     re = new RegExp("(?:.{" + lscos + "})(.{" + lsclen + "})", "i");
     temp = re.test(lcstest);
     re = new RegExp("(" + RegExp.$1 + ")", "i");
      if(re.test(lcstarget)){
       matchfound=1;
       result = RegExp.$1;
       break;
       }
     lscos = lscos + 1;
     }
     if(matchfound==1){return result; break;}
    lsclen = lsclen - 1;
   }
  result = "";
  return result;
 }

describe('Longest Common', () => {
  it('should find longest common substring', () => {
    const stringA = 'testyyyfoo';
    const stringB = 'bazzyyfoobaazz';

    const distance = lcs(stringA, stringB);
    assert.equal(distance, "yyfoo");
  });
});
