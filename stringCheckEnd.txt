function confirmEnding(str, target) {
  var lengthOfTarget = target.length;
  var endOfString = str.substr(-lengthOfTarget);  
  if(endOfString === target){
    return true;
  }  
  return false;
}