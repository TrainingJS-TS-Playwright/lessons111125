function sum (numbers) {
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result = result + numbers[i];
  }
  return result;
}
//console.log(sum([1, 0.6, 0, 6]));
//console.log(sum([0]));