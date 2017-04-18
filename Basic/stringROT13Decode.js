function stringROT13Decode(str) { 
  var decodedStr = [];
  for(var i = 0; i < str.length; i++){
    if(str.charCodeAt(i) < 65 || str.charCodeAt(i) > 90){
      //Do not change special characters
      decodedStr.push(String.fromCharCode(str.charCodeAt(i)));
    }
    else{
      //Decode letters
      if(str.charCodeAt(i) < 78){        
        decodedStr.push(String.fromCharCode(str.charCodeAt(i)+13));
      }
      else{
        decodedStr.push(String.fromCharCode(str.charCodeAt(i)-13));
      }
    }
  }
  decodedStr = decodedStr.join("");
  return decodedStr;
}