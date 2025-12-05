function countPositivesSumNegatives(input) {
    let countPos = 0;
    let sumNeg = 0;
    // let final = [];

    input.forEach(function(element) {
        if (element > 0) {
            countPos++;
        }
        else {
            sumNeg += element;
        }
    });
    // final.push(countPos);
    // final.push(sumNeg);
    // return final;
    return [countPos, sumNeg];
}

console.log(countPositivesSumNegatives([-7, 1, 2, -3, -10]))

// https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/javascript
