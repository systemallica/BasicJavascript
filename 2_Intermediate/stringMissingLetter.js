function stringMissingLetter(str) {
  var firstCharcode = str.charCodeAt(0);
  for(var i = 1; i < str.length; i++){    
    if (str.charCodeAt(i) === firstCharcode+i){
    }else{
      return String.fromCharCode(firstCharcode+i); 
    }
  }
  return undefined;
}