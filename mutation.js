function mutation(arr) {
  
  //Make everything lowercase
  arr[0] = arr[0].toLowerCase();
  arr[1] = arr[1].toLowerCase();
  
  var containsAllLetters = false;
  
  //Check if first array contains each letter of the second array
  for (i = 0; i < arr[1].length; i++){
    if (arr[0].indexOf(arr[1][i]) !== -1){
      containsAllLetters = true;
    }
    else{
      //If 1 letter is not contained, return false
      return false;
    }
  }
  return true;  
}