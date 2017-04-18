//Check if given value is true and return it
function isTrue(value) {
  if(Boolean(value) !== false){
    return value;
  }
}

function bouncer(arr) {
  //Filter array to contain only non-false values
  var filteredArr = arr.filter(isTrue); 
  
  return filteredArr;
}