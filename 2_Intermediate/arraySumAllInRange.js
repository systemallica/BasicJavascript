function sumAll(arr) {
  //Use spread operator to pass array of numbers as args to Math.min
  var min = Math.min(...arr);
  var max = Math.max(...arr);
  var sum = 0;
  
  //Sum all numbers from min to max
  for(min; min <= max; min++){
    sum += min;
  }
  return sum;
}