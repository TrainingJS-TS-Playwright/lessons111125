function findAverage(array) {
  if (array.length === 0) {
    return 0;
  }
  let sum = 0;
  
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum / array.length;
}
//console.log(findAverage([1, 2, 5, 7]));
//console.log(findAverage([0]));