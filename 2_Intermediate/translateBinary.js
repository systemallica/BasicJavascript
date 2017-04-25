function translateBinary(str) {
  //Split string in array, each number is an element
  str = str.split(" ");
  var newArr = [];
  var digit;
  
  for(var i = 0; i < str.length; i++){
    //Change number base to decimal
    digit = parseInt(str[i], 2);
    //Create array of letters from charcodes
    newArr.push(String.fromCharCode(digit));
  }
  newArr = newArr.join("");
  return newArr;
}