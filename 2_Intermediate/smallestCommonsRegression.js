function smallestCommons(arr) {
  var max = Math.max(...arr);
  var min = Math.min(...arr);
  
  var arrValues = [];
  var quot = 0;
  var iteration = 1;
  var n;
  
  for(var i = max; i >= min; i--){ 
      arrValues.push(i);
  } 
  do{
    quot = arrValues[0] * iteration * arrValues[1];
    for(n = 2; n < arrValues.length; n++){
      if (quot % arrValues[n] !== 0) {
        break;
      }
    }
  iteration++;
  }while(n !== arrValues.length);
  console.log(quot);
  return quot;
}