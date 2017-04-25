function sumPrimes(num) {
  var primes = [2];
  var isPrime = false;
  for(var i = 1; i <= num; i++){
    for(var j = 2; j < i; j++) {
        if(i % j === 0) {
          isPrime = false;
          break;
        }else{
          isPrime = true;
        }
    }
    if(isPrime){
      primes.push(i);
    }
  }  
  var sum = primes.reduce(add, 0);
  console.log(sum);
  return sum;
}

function add(a, b) {
    return a + b;
}