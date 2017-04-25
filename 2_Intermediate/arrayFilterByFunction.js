function dropElements(arr, func) {
  var filteredArr = arr.filter(func);  
  if(filteredArr.length === 0){
    arr = [];
  }else{
    for(var i = 0; i < arr.length; i++){
      if(filteredArr.indexOf(arr[0]) === -1){
        arr.shift();
      }else{
        break;
      }
    }
  }  
  return arr;
}