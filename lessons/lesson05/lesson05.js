// function printMessage() {
//     console.log("----- Lesson 05 Output -----");
//     console.log("\tHello, welcome to Lesson 05!");
//     console.log("\tThis is a simple function demonstration.");
// }

// printMessage();
// printMessage();
// printMessage();

// function printMessage(name) {
//     console.log("----- Lesson 05 Output -----");
//     console.log("\t" + name + ", welcome to Lesson 05!");
// }

// printMessage("Alice");
// printMessage("Bob");
// printMessage("Charlie");

// function temp(){
//     a = 5;
//     var b = 10;
//     let c = 15;
//     const d = 20;
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     console.log(d);
// }

// console.log("----- Lesson 05 Output -----");
// console.log(a); // ReferenceError: a is not defined
// temp();
// console.log(a); // 5
// // console.log(b); // Error: b is not defined
// // console.log(c); // Error: c is not defined
// // console.log(d); // Error: d is not defined

// function printInfo(name, age = 18, city = "Unknown") {
//     console.log("----- Lesson 05 Output -----");
//     console.log("\tName: " + name);
//     console.log("\tAge: " + age);
//     console.log("\tCity: " + city);
// }
// // printInfo("Alice", 25, "New York");
// printInfo("Bob", 30);
// // printInfo("Charlie");
// // printInfo();

// function multiplication(a = 1, b = 1, c = 1) {
//     console.log(`a=${a}, b=${b}, c=${c}`);
//     const result = a * b * c;
//     console.log(result);
// }
// multiplication(3); // 3
// multiplication(3, 5); // 15
// multiplication(3, 5, 7); // 105


// function printTypeElements() {
//     console.log(`arguments = ${arguments}`);
//     console.log(arguments);
//     for (let i = 0; i < arguments.length; i++) {
//         console.log(`\tType of argument[${i}]=${arguments[i]} is ${typeof arguments[i]}`);
//     }
// }
// printTypeElements();

// printTypeElements(42, "Hello", true, null, undefined, { name: "Alice" }, [1, 2, 3], function() {});



// function printTypeElements(a,b,c) {
//     console.log(`arguments = ${arguments}`);
//     console.log(arguments);
//     console.log(`a=${a}, b=${b}, c=${c}`);
//     for (let i = 0; i < arguments.length; i++) {
//         console.log(`\tType of argument[${i}]=${arguments[i]} is ${typeof arguments[i]}`);
//     }
// }
// result = printTypeElements();
// console.log(`result = ${result}`);
// result = printTypeElements(42, "Hello", true, null, undefined, { name: "Alice" }, [1, 2, 3], function() {});
// console.log(`result = ${result}`);

// function CapitaliseWords(text) {
//     let words = text.split(" ");
//     console.log(words);
//     for (let i = 0; i < words.length; i++) {
//         words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
//     }
//     console.log(words);
//     return words.join(" ");
// }

// let inputString = "hello world! welcome TO lesson 05.";
// let capitalizedString = CapitaliseWords(inputString);
// console.log("----- Lesson 05 Output -----");
// console.log(`Original String: ${inputString}`);
// console.log(`Capitalized String: ${capitalizedString}`);

// function testCapitaliseWords() {
//     let test1 = "javaScript is fun";
//     let result1 = CapitaliseWords(test1);
//     console.log(`Test 1 - Input: "${test1}" | Output: "${result1}"`);
//     let test2 = "MULTIPLE words HERE";
//     let result2 = CapitaliseWords(test2);
//     console.log(`Test 2 - Input: "${test2}" | Output: "${result2}"`);
//     let test3 = "sInGlE";
//     let result3 = CapitaliseWords(test3);
//     console.log(`Test 3 - Input: "${test3}" | Output: "${result3}"`);
// }

// testCapitaliseWords();

// function printNumbers(maxSumValues=100) {
//     console.log("----- Lesson 05 Output -----");
//     let sum = 0;
//     let elements = [];
//     let number = 1;
//     while (sum + number <= maxSumValues) {
//         sum += number;
//         elements.push(number);
//         console.log(`\tAdded ${number}, current sum: ${sum}`);
//         number++;
//         if (elements.length >= 15) {
//             return `Reached 15 elements, stopping early. Current sum: ${sum}`;
//             // console.log("\tReached 15 elements, stopping early.");
//             // break;
//         }
//     }
//     return `Final sum: ${sum}`;


// }
// let result = printNumbers(50);
// console.log(result);
// result = printNumbers(200);
// console.log(result);

// let counter = 0;
// function generateID() {
//     counter++;
//     return `ID_${counter.toString().padStart(4, '0')}`;
// }
// function resetCounter() {
//     counter = 0;
// }


// console.log("----- Lesson 05 Output -----");
// console.log(generateID()); // ID_0001
// console.log(generateID()); // ID_0002
// console.log(generateID()); // ID_0003
// resetCounter();
// console.log(generateID()); // ID_0001
// counter = 5;
// console.log(generateID()); // ID_0006


// let x = 10;
// function modifyX() {
//     let x =20;
//     console.log(`Inside modifyX, x = ${x}`);

// }
// console.log("----- Lesson 05 Output -----");
// console.log(`Before modifyX, x = ${x}`);
// modifyX();
// console.log(`After modifyX, x = ${x}`);

// function sayHello() {
//     return "Hello!";
// }
// my_func = sayHello;
// console.log("----- Lesson 05 Output -----");
// console.log(my_func());
// console.log(sayHello());
// my_func = null;
// // console.log(my_func()); // TypeError: my_func is not a function
// console.log(sayHello());

// function functionA() {
//     console.log("Function A is called.");
// }

// functionB = function(a) {
//     console.log("Function B is called. Argument a =", a);
// }

// functionA();
// functionB();
// functionB(42);

// function multiple(a, b, level = 0) {
//     console.log(`${'\t'.repeat(level)}Calculating multiple of ${a} and ${b} at level ${level}`);
//     return a * b;
// }
// function factorial(n, level = 0) {
//     console.log(`${'\t'.repeat(level)}Calculating factorial(${n}) at level ${level}`);
//     if (n === 0 || n === 1) {
//         console.log(`${'\t'.repeat(level)}Base case reached: factorial(${n}) = 1`);
//         return 1;
//     } else {
//         console.log(`${'\t'.repeat(level)}Returning ${n} * factorial(${n - 1})`);
//         // return n * factorial(n - 1, level + 1);
//         return multiple(n, factorial(n - 1, level + 1), level);
//     }
// }
// let number = 5;
// let result = factorial(number);
// console.log("----- Lesson 05 Output -----");
// console.log(`Factorial of ${number} is ${result}`);



// (function () {
//     console.log("I like JavaScript");
// }()); // "I like JavaScript"

// function closureCounter(text) {
//     let count = 0;
//     return function() {
//         count++;
//         console.log(text);
//         return count;
//     };
// }
// let myCounter1 = closureCounter("Counter 1 -> ");
// let myCounter2 = closureCounter("Counter 2 ==>> ");
// console.log("----- Lesson 05 Output -----");
// console.log(`myCounter1: ${myCounter1()}`); // 1
// console.log(`myCounter1: ${myCounter1()}`); // 2
// console.log(`myCounter2: ${myCounter2()}`); // 1
// console.log(`myCounter1: ${myCounter1()}`); // 3
// console.log(`myCounter2: ${myCounter2()}`); // 2

let a = 10;
let b = 20;
testHosting();
console.log(`Before block: a=${a}, b=${b}, c=${c} testHostingAnonim=${testHostingAnonim}`);

var c = 30;
console.log(`Before block: a=${a}, b=${b}, c=${c}`);

function testHosting() {
    console.log("Inside function testHosting");
}
var testHostingAnonim = function() {
    console.log("Inside function testHostingAnonim");
}
testHostingAnonim();