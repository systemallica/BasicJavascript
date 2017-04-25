function spinalCase(str) {
  //first letter lowercase
  str = str.replace(/^./, function(str){ return str.toLowerCase(); });
  
  //insert space before capital letters
  str = str.replace(/([A-Z])/g, ' $1');
  
  //make all lowercase
  str = str.toLowerCase();  
  //replace spaces and underscores with -
  //str = str.replace(/ |_/g,"-");
  str = str.replace(/  |_ /g,"-");
  str = str.replace(/ |_/g,"-");
  console.log(str);
  return str;
}