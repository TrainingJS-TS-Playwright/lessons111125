function positiveSum(arr) {
    let sum = 0;
    for (let value of arr) {
        if (value > 0) sum += value;
    }
    return sum;
}

console.log(positiveSum([1, 2, -4]));

// https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript