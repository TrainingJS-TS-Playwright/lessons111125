
function sum (numbers) {
  let sum = 0;
  for (let number of numbers){
    sum += number;
  }
    return sum;
    
}

console.log(sum([1, 5.2, 4, 0, -1]));
console.log(sum([-2.398]));
console.log(sum([]));