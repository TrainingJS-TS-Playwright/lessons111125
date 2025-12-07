function positiveSum(arr) {
  if(arr.length==0){
    return 0;
  }
  
  let result = 0;
  for (let i=0; i<arr.length; i++){
    if(arr[i]>0){
      result += arr[i]
    }
  }
  return result;
}