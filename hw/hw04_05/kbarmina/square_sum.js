function squareSum(numbers){
  if(numbers.length==0){
      return 0;
    }

    let result = 0;
    for (let i=0; i<numbers.length; i++){
      result += numbers[i] ** 2
    }
    return result;
}