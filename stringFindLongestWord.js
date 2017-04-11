function findLongestWord(str) {
  
  var strArr = str.split(" ");  
  var size = 0;
  var longest = -1;
  
  for (var i=0; i < strArr.length; i++) {
    size = strArr[i].length;
    if (size > longest){
      longest = size;
    }
  }  
  return longest;
}