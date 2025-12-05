function squareSum(numbers) {
    let result = 0;
    for (let value of numbers) {
        result += Math.pow(value, 2);
    }
    return result;
}
console.log(squareSum([1, 2, -4]));


// https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript