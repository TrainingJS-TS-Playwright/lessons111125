// let a = 10;
// let b = -a;
// console.log(b); // Output: -10
// let c = +b;
// console.log(c); // Output: -10  
// c = -b;
// console.log(c); // Output: 10
// ++a;
// console.log(a); // Output: 11

// let d = a + b;
// console.log(d); // Output: 1

// let a = 7;
// let b = 3;
// console.log(`${a} / ${b} = ${a / b}`); // Output: 2.3333333333333335
// console.log(`${a} % ${b} = ${a % b}`); // Output: 1
// console.log(`${a} ** ${b} = ${a ** b}`); // Output: 343

// console.log(`${a} // ${b} = ${a**0.5}`); // Output: 2.6457513110645907
// console.log(`${a} // ${b} = ${Math.sqrt(a)}`); // Output: 2.6457513110645907
// console.log(`${a} // ${b} = ${Math.floor(a / b)}`); // Output: 2

// let a = 5;
// console.log(a); // Output: 5
// console.log(++a); // Output: 6
// console.log(a); // Output: 6
// console.log(a++); // Output: 6
// console.log(a); // Output: 7
// // console.log((-1) ** 0.5); // Output: NaN

// console.log(1+2+3+"4"+5+6); // Output: 6456

// a = 1;
// a = a + 2;
// a = a + 3;
// a += 2;
// a += 3;

// Comparison Operators
// let a = 10;
// let b = 5;
// console.log(a == b); // Output: false
// console.log(a != b); // Output: true
// console.log(a === b); // Output: false
// console.log(a !== b); // Output: true

// let aa = "10";
// let ba = 10;
// console.log(aa == ba); // Output: true
// console.log(aa != ba); // Output: false
// console.log(aa === ba); // Output: false
// console.log(aa !== ba); // Output: true

// let a = "ABC";
// let b = "ABD";
// console.log(a < b); // Output: true
// console.log(a > b); // Output: false
// console.log(a <= b); // Output: true
// console.log(a >= b); // Output: false

// console.log(NaN === NaN); // Output: false
// console.log(NaN == NaN); // Output: false
// console.log(Object.is(NaN, NaN)); // Output: true
// let a = NaN;
// console.log(isNaN(a)); // Output: true
// console.log(Number.isNaN(a)); // Output: true

// console.log(true && true && false); // Output: false
// a = 10;
// b = 5;
// console.log(a > 5 || b < 3); // Output: true
// console.log(a > b && b < 5); // Output: false
// console.log(true && true && false); // Output: false

// const x = 59;
// const res = x >= 0 && x <= 100;
// console.log(`The number ${x} is in the range 0 to 100: ${res}`);

// console.log(1 && -1 && true &&"Data" && 7); // Output: 7
// console.log(1 && -1 && true &&"Data"); // Output: Data

// function getRandomTrueOrFalse(id) {
//     let number = Math.random();
//     console.log(`Generated ${id} number: ${number} ${number < 0.5 ? '<' : '>='} 0.5 is ${number < 0.5}`);
//     if (number < 0.5) {
//         return true;
//     } else {
//         return false;
//     }
// }
// const result = getRandomTrueOrFalse(1) || getRandomTrueOrFalse(2) || getRandomTrueOrFalse(3);
// console.log(`Final result: ${result}`);

// const result2 = getRandomTrueOrFalse(1) && getRandomTrueOrFalse(2) || getRandomTrueOrFalse(3) && getRandomTrueOrFalse(4);
// console.log(`Final result: ${result2}`);
// const result3 = getRandomTrueOrFalse(1) && (getRandomTrueOrFalse(2) || getRandomTrueOrFalse(3)) && getRandomTrueOrFalse(4);
// console.log(`Final result: ${result3}`);

// let age1 = 11;
// result = age1 >= 18 ? "Adult" : "Child";
// console.log(`Age ${age1} is: ${result}`); // Output: Age 11 is: Child
// age1 = 25;
// result = age1 >= 18 ? "Adult" : "Child";
// console.log(`Age ${age1} is: ${result}`); // Output: Age 25 is: Adult

// console.log(parseInt("7nm")); // 7
// console.log(parseInt("72nm")); // 72
// console.log(parseInt("a72nm")); // NaN

// ==
// !=

// ===
// !==