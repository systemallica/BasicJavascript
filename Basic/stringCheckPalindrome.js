function palindrome(str) {
  
  originalStrFormatted = str.replace(/\W+/g, "").replace("_","").toLowerCase();
  reversedStrFormatted = originalStrFormatted.split("").reverse().join("");
  
  if (originalStrFormatted === reversedStrFormatted){
    return true;
  }
  else{
    return false;
  }
}