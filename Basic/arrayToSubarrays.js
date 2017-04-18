function chunkArrayInGroups(arr, size) {
  var n = arr.length / size;
  var slicedArr = [];
  var superArr = [];
  
  superArr[0] = arr.slice(0, size);
  
  for(i = 0; i < n; i++){
    if(i > 0){
      superArr[i] = arr.slice(i*size, i*size+size);
    }
  }  
  
  console.log(superArr);
  return superArr;
}