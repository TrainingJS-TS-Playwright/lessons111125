function findAverage(array) {
    let sum = 0;
    if (array.length === 0) {
        return 0;
    }
    for (let x of array) {
        sum += x;
    }
    return sum / array.length;

}

console.log(findAverage([2, 4]))
console.log(findAverage([]))

//https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/javascript