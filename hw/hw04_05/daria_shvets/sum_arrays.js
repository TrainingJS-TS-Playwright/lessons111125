function sum(numbers) {
    let sum = 0;
    for (let value of numbers) {
        sum += value;
    }
    return sum;
}


console.log(sum([3, 5, 4, 0, 1]));
console.log(sum([]));

// https://www.codewars.com/kata/53dc54212259ed3d4f00071c/train/javascript