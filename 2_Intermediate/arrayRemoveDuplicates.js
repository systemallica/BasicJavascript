function uniteUnique(arr) {

   var args = arguments;
   var flattened = [];

   //Put all values in an array
   for(var i = 0; i < args.length; i++){
     for(var j = 0; j < args[i].length; j++){
       flattened.push(args[i][j]);
     }
   }

   //Use Set object to remove duplicates
   var filtered = Array.from(new Set(flattened));

   return filtered;
}