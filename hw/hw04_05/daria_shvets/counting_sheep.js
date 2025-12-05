function countSheeps(sheep) {
    // let sum = 0;
    // for (let value of sheep) {
    //     if (value === true)
    //         sum++;
    // }
    // return sum;
    return sheep.filter(Boolean).length, sheep.filter((element) => element === true).length;

}

console.log(countSheeps([undefined, null, false, true]));

// https://www.codewars.com/kata/54edbc7200b811e956000556/train/javascript