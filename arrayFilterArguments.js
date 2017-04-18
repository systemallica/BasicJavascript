function arrayFilterArguments(arr) {
  
  var filterValue = 0;
  
  for(var i = 1; i < arguments.length; i++){
    filterValue = arguments[i];
    arr = arr.filter(filterFunction);
  }
  
  function filterFunction(value){
   return value !== filterValue;
  }
  
  return arr;
}