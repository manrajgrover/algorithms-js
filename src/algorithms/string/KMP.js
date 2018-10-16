/**
 * KMP Algorithm
 * @param  {String}  stream of characters in which pattern is to be searched
 * @param  {String}  substring to be searched in text
 * @return {Number}  Index of the first substring occurence if found, else -1
 */

 kmp=(text,pattern)=>{
  if(!pattern) return -1;
  patLen=pattern.length;
  textLen=text.length;
  LPS=[]
  for (var i = 0; i <patLen; i++) {
    LPS.push(0);
  }
  var i=1;
  var j=0;

  while(i<patLen){
    if(pattern[i]==pattern[j]){
      LPS[i++]=++j;
    }
    else{
      if(j) j=LPS[j-1];
      else LPS[i++]=0;
    }
  }
  i=j=0;
  while(i<textLen){
    if(pattern[j]==text[i]){
      i++;j++;
    }
    if(j==patLen) return i-j;
    else{
      if(i<textLen && pattern[j]!=text[i]){
        if(j) j=LPS[j-1];
        else i++;
      }
    }
  }
  return -1;
 };
 module.exports=kmp;
