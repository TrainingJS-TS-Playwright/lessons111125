function countPositivesSumNegatives(input) {
  if (input == null || input.length === 0) {
    return [];
  }
  let array = [];
  let count_positive = 0;
  let negativeSum = 0;

  for (let i of input) {
    if (i > 0) {
        count_positive++;
    } else if (i < 0) {
        negativeSum += i;
    }
  }
  array[0] = count_positive;
  array[1] = negativeSum;
  return array;
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));
console.log(countPositivesSumNegatives([]));
console.log(countPositivesSumNegatives(null));