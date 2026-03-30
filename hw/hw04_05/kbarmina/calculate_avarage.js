function findAverage(array) {
  if (array.length === 0) {
    return 0;
  }
  
  let summa = 0;
  for (let i=0; i<array.length; i++){
    summa += array[i];
  }
  return summa/array.length;
}