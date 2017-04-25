function translatePigLatin(str) {
  var arr = [];
  var suffix = "ay";
  var suffixVowel = "way";
  
  if(str.indexOf("a") != -1){
    arr.push(str.indexOf("a"));
  }
  if(str.indexOf("e") != -1){
    arr.push(str.indexOf("e"));
  }
  if(str.indexOf("i") != -1){
    arr.push(str.indexOf("i"));
  }
  if(str.indexOf("o") != -1){
    arr.push(str.indexOf("o"));
  }
  if(str.indexOf("u") != -1){
    arr.push(str.indexOf("u"));
  }
  
  var firstVo = Math.min(...arr);
  //If it starts with a vowel
  if(firstVo === 0){
    str += suffixVowel;
  //Else
  }else{
    var firstCon = str.slice(0, firstVo);
    var restOfWord = str.slice(firstVo, str.length);
    str = restOfWord + firstCon +suffix;
  }
  return str;
}