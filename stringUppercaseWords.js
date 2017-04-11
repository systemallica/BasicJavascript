function titleCase(str) {
  //Make sentence lowercase
  str = str.toLowerCase();
  
  //Split sentence by words
  var strArr = str.split(" ");  
  
  for(i = 0; i < strArr.length; i++){
      
    //Split word by letters 
    var splittedArr = strArr[i].split("");
   
    //Make first letter of each word uppercase
    splittedArr[0] = splittedArr[0].toUpperCase();
   
    //Join letters 
    splittedArr = splittedArr.join("");
   
    //Replace original word in sentence 
    strArr[i] = splittedArr;   
    
  }
  //Return the new sentence
  return strArr.join(" ");
}