function addTogether() {
  var args = arguments;
  var before = arguments[0];
  if(arguments.length > 1){
    if(typeof arguments[0] == 'number' && typeof arguments[1] == 'number'){
      return arguments[0] + arguments[1];
    }
  }else if(typeof arguments[0] == 'number'){
    return function(after){
      if(typeof after == 'number'){
      return before + after;
      }
    };
  }
  return undefined;
}