function isPrime(num) {
  var sqrtnum=Math.floor(Math.sqrt(num));
    var prime = num != 1;
    for(var i=2; i<sqrtnum+1; i++) { // sqrtnum+1
        if(num % i == 0) {
            prime = false;
            break;
        }
    }
    return prime;
};

function primeFactors(num){

  var arr = [];
  if (isPrime(num)){
    arr.push(num);
  }

  else {
    for(var i = 2; i <= num; i++){
      if(num % i == 0){
        if(isPrime(i)){
          num = num/i;
          arr.push(i);
        }
      }
    }
  }
  return arr;
  
};

module.exports = primeFactors;
