function pairElement(str) {
  var capsule = [];
  for(var i = 0; i < str.length; i++){
    if(str[i]==="A"){
      capsule.push(["A","T"]);
    }
    if(str[i]==="T"){
      capsule.push(["T","A"]);
    }
    if(str[i]==="G"){
      capsule.push(["G","C"]);
    }
    if(str[i]==="C"){
      capsule.push(["C","G"]);
    }
  }
  return capsule;
}