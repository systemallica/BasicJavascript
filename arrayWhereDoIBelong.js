function arrayWhereDoIBelong(arr, num) {
  // Set default position at the end of the array
  var whereYouBelong = arr.length;
  // Sort array in ascending order
  arr = arr.sort(function(a, b) {
  return a - b;
  });
  // Find correct index for the new value
  for(var i = 0; i < arr.length; i++){
    if(num > arr[i] && num < arr[i+1]){
      whereYouBelong = i+1; 
    }      
    else if(num === arr[i] && num < arr[i+1]){
      whereYouBelong = i;
    }
  }  
  return whereYouBelong;
}