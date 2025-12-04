function findAverage(array) {
  
    if (array.length === 0) {
    return 0;
  } 
    let sum = 0;
    for (let i of array) {
    sum += i;
  }

  return sum / array.length;
}

console.log(findAverage([1, 2, 3, 4, 5]));
console.log(findAverage([]));