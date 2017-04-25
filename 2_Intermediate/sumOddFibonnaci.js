function sumFibs(num) {
  var sum = 1;  
  var a = 0; 
  var b = 1;
  var f = 1;
    
    for(var i = 2; i <= num; i++) {
        f = a + b;
        a = b;
        b = f;
      
      if(f % 2 !== 0 && f <= num){
        sum += f;   
      } 
    }     
  return sum;
}