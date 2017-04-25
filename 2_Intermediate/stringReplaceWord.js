function myReplace(str, before, after) {
 var aft = "";
  if(before[0] == before[0].toUpperCase()){    
    aft += after[0].toUpperCase();    
    aft += after.slice(1, after.length);
    console.log(aft);
  }else{
    aft = after;
  }
  var newstr = str.replace(before, aft);
  return newstr;
}