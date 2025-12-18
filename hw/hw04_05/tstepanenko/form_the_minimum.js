function invert(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(array[i] ? -array[i] : 0);
  }
   return result;
}
console.log(invert([1, 2, 4, -9]));
console.log(invert([]));