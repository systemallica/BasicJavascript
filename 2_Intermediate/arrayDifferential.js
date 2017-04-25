function arrayDifferential(arr1, arr2) {
  //Check which array is biggest
  var biggest = arr2;
  var smallest = arr1;
  if(arr1.length > arr2.length){
    biggest = arr1;
    smallest = arr2;
  }
   
  //Filtering functions
  function filtBig(val){
    if(smallest.indexOf(val) < 0){
      return val;
    }
  }
  
  function filtSmall(val){
    if(biggest.indexOf(val) < 0){
      return val;
    }
  }
  
  //Filter values that are repeated
  var bigFiltered = biggest.filter(filtBig);
  var smallFiltered = smallest.filter(filtSmall);
  
  //Concatenate both filtered arrays
  var newArr = bigFiltered.concat(smallFiltered);
  
  return newArr;
}