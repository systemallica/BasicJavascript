function truncateString(str, num) {
  if(str.length > num){
    if(num <= 3){
      str = str.substring(0, num) + "...";
      return str;
    }
    else{  
      str = str.substring(0, num-3) + "...";
      return str;
    }
  }
  return str;
}