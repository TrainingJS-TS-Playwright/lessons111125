function invert(array) {
    let invert_array = [];
    for (let i = 0; i < array.length; i++) {
        invert_array[i] = -array[i];
    }
   return invert_array;
}

console.log(invert([1, 2, 3, 4, 5]));
console.log(invert([1, -2, 3, -4, 5]));
console.log(invert([]));