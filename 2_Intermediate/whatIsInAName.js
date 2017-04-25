function whatIsInAName(collection, source) {
  var arr = [];
  
  for(var i = 0; i < collection.length; i++){
    var allIn = false;
    for (var sourceKey in source){      
        
        if(collection[i][sourceKey] === source[sourceKey]){
          allIn = true;          
        }else{
          allIn = false;
          break;
        }
    }
    if(allIn){
      arr.push(collection[i]);
    }    
  }
  return arr;
}