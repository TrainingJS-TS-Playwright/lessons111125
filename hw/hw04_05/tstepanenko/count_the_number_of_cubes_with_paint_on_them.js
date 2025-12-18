function countPositivesSumNegatives(input) {
  if (input === null || input.length === 0) {
    return [];
  }
let countPositives = 0;
let SumNegatives = 0;

for (let i = 0; i < input.length; i++) {
  if (input[i] > 0) {
    countPositives++;
  } else if (input[i] < 0) {
    SumNegatives += input[i];
  }
}
return [countPositives, SumNegatives];
}
//console.log(countPositivesSumNegatives([1, 5, 8, -1, -5, 0]))
//console.log(countPositivesSumNegatives([]))