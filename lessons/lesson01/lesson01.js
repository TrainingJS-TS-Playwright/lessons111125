// console.log("Welcome to Lesson 01!");
// variable1 = 10;
// arr = [1, 2, 3];
// console.log("The value of variable1 is:", variable1, "arr:", arr);
// console.log(typeof variable1);
// variable1 = "Now I'm a string";
// console.log("The new value of variable1 is:", variable1);
// console.log(typeof variable1);

// var variable1;
// console.log("The value of variable1 is:", variable1);
// console.log(typeof variable1);
// variable1 = null;
// console.log("The new value of variable1 is:", variable1);
// console.log(typeof variable1);

// let x; // type undefined
// console.log(x, typeof x); // undefined
// x = 45; // type number
// console.log(x, typeof x); // 45
// x = "45"; // type string
// console.log(x, typeof x); // "45"
// x = false; // type boolean
// console.log(x, typeof x); // false
// x = 25.25; // type number
// console.log(x, typeof x);
// x = null; // type object (this is a known quirk in JavaScript)
// console.log(x, typeof x);

// let x = 20;
// console.log(x, typeof x); // 20, number
// x = String(x);
// console.log(x, typeof x); // "20", string
// x = Boolean(x);
// console.log(x, typeof x); // true, boolean

// let x = 10; // number
// console.log(x, typeof x); // 10, number
// x = x.toString(); // convert to string
// console.log(x, typeof x);
// x = Number(x); // convert back to number
// console.log(x, typeof x);
// x = x + ""; // concatenate with a string to convert to string
// console.log(x, typeof x);

// console.log(1+1+1+1+""+1+2+3);


// Number conversions
// let x;
// x = 10; // number
// console.log(x, typeof x);
// x = 10.5; // number
// console.log(x, typeof x);
// x = "10"; // string
// console.log(x, typeof x);
// x = Number(x); // convert string to number
// console.log(x, typeof x);
// x = "10.5"; // string
// console.log(x, typeof x);
// x = Number(x); // convert string to number
// console.log(x, typeof x);
// x = "10abc22"; // string
// console.log(x, typeof x);
// x = Number(x); // convert string to number
// console.log(x, typeof x);
// x = +"10.99"; // unary plus operator to convert string to number
// console.log(x, typeof x);
// x = +"10.99a"; // unary plus operator to convert string to number
// console.log(x, typeof x);
// console.log(parseInt("10.1")); // 10
// console.log(parseInt("10.9")); // 10
// console.log(parseFloat("10.1")); // 10.1
// console.log(parseFloat("10.9")); // 10.9
// x = 10;
// console.log(parseFloat(x)); // 10

// console.log(parseInt("10.55ab12")); // 10
// console.log(parseFloat("10.55ab12")); // 10.55

// console.log(parseInt("фівфі10ab12")); // NaN
// console.log(parseFloat("фівфі10ab12")); // NaN


// console.log(isNaN(1)); // false
// console.log(isNaN("1")); // false
// console.log(isNaN("1m")); // true
// console.log(isNaN(null)); // false
// console.log(isNaN(undefined)); // true

// Boolean conversions
// let x = true;
// console.log(x, typeof x); // true, boolean
// x = false;
// console.log(x, typeof x); // false, boolean
// is_false = [0, "", null, undefined, NaN];
// is_true = [1, -1, "hello", [], {}, function() {}];

// for (let val of is_false) {
//     console.log(val, "->", Boolean(val), !!val);
// }
// for (let val of is_true) {
//     console.log(val, "->", Boolean(val), !!val);
// }

// let x = 7;
// let y = 3;
// console.log("x =", x, ", y =", y);
// console.log("x + y =", x + y);
// console.log("x - y =", x - y);
// console.log("x * y =", x * y);
// console.log("x / y =", x / y);
// console.log("x % y =", x % y);
// console.log("x ** y =", x ** y);
// console.log(9**0.5);
// console.log((2+5)**3);
// console.log(2+5**3);

// arrays
// let arr = [10, "hello", true, null, undefined, 25.5];
// console.log("arr =", arr);
// arr = new Array(5, 6, 7, "world", false);
// console.log("arr =", arr);
// console.log(typeof arr);
// console.log("arr.length =", arr.length);
// console.log("arr[0] =", arr[0]);
// console.log("arr[1] =", arr[1]);
// console.log("arr[2] =", arr[2]);
// console.log("arr[3] =", arr[3]);
// console.log("arr[4] =", arr[4]);
// console.log("arr[5] =", arr[5]);
// arr[2] = "changed value";
// console.log("After changing, arr =", arr);

// let cities = ["New York", "London", "Tokyo", "Sydney"];
// console.log("Cities:", cities);
// console.log("Number of cities:", cities.length);
// console.log("First city:", cities[0]);
// console.log("Last city:", cities[cities.length - 1]);
let cities = ["New York", "London", "Tokyo", "Sydney"];
console.log("Cities:", cities);
console.log("Number of cities:", cities.length);
// cities[10] = "Paris"; // Adding a new city at index 10
console.log("Cities after adding Paris at index 10:", cities);
console.log("Number of cities after addition:", cities.length);
cities.push("Berlin"); // Adding a new city using push
console.log("Cities after pushing Berlin:", cities);
console.log("Number of cities after pushing:", cities.length);
cities.unshift("Kyiv"); // Adding a new city at the beginning
console.log("Cities after unshifting Kyiv:", cities);
console.log("Number of cities after unshifting:", cities.length);
cities.unshift("Madrid", "Rome"); // Adding multiple cities at the beginning
console.log("Cities after unshifting Madrid and Rome:", cities);
console.log("Number of cities after unshifting multiple:", cities.length);

cities.splice(2, 0, "Amsterdam", "Dubai"); // Inserting cities at index 2
console.log("Cities after splicing in Amsterdam and Dubai at index 2:", cities);
console.log("Number of cities after splicing:", cities.length);
let c = cities.splice(4, 2); // Removing 2 cities starting from index 4
console.log("Cities after splicing out 2 cities from index 4:", cities);
console.log("Number of cities after splicing out:", cities.length);
console.log("Removed cities:", c);
cities.push("Tokyo"); // Adding another Tokyo for testing indexOf
console.log("Cities after pushing another Tokyo:", cities);
let index = cities.indexOf("Tokyo");
console.log("Index of Tokyo:", index);
index = cities.lastIndexOf("Tokyo");
console.log("Last index of Tokyo:", index);
index = cities.indexOf("Tokyo", cities.indexOf("Tokyo") + 1);
console.log("Index of Tokyo:", index);



index = cities.indexOf("NonExistentCity");
console.log("Index of NonExistentCity:", index);



let exists = cities.includes("London");
console.log("Does London exist in cities?", exists);
exists = cities.includes("NonExistentCity");
console.log("Does NonExistentCity exist in cities?", exists);
