function isPrime(num) {
  const sqrtnum = Math.floor(Math.sqrt(num));
  let prime = num !== 1;
  for (let i = 2; i < sqrtnum + 1; i++) { // sqrtnum+1
    if (num % i === 0) {
      prime = false;
      break;
    }
  }
  return prime;
}

function primeFactors(num) {
  const arr = [];
  if (isPrime(num)) {
    arr.push(num);
  } else {
         for (let i = 2; i <= num; i++) {
           if (num % i === 0) {
           if (isPrime(i)) {
             num/=i;
             arr.push(i);
        }
      }
    }
  }
  return arr;
}

module.exports = primeFactors;
