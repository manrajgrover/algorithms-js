function valid(a,b,c){
  if(a + b <= c || b + c <= a || a + c <= b){
    return false;
  }
  else {
    return true;
  }
}
