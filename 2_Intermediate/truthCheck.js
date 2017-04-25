function truthCheck(collection, pre) {
  var allTrue = false;
  for(var i = 0; i < collection.length; i++){
    if(collection[i][pre]){
      allTrue = true;
    }else{
      allTrue = false;
      break;
    }   
  }
  return allTrue;
}