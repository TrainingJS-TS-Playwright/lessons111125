
// let n = 0;
// while (n < 5) {
//   console.log(n);
//   n++;
// }
// console.log("Finished!");


// // Infinite loop example
// // while (n >= 5) {
// //     console.log(n);
// //     n++;
// // }

// do {
//   console.log(`before n=${n}`);
//   n++;
//   console.log(`after n=${n}`);
// } while (n < 10);
// console.log("Done with do...while loop!");


// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }
// console.log("Finished with for loop!");
// let i = 10;
// for(;i < 15;) {
//   console.log(i);
//   i++;
// }
// console.log("Finished with second for loop!");

// for(let j = 0, k = 10; j < 5 && k > 0; j++, k--) {
//   console.log(`j=${j}, k=${k}`);
// }
// console.log("Finished with third for loop!");
// for(let j = 0, k = 10; j < 5 && k > 0; j++, k--) {
//   console.log(`j=${j}, k=${k}`);
//   if (j === 4) {
//     j-=2;
//   }
// }
// console.log("Finished with third for loop!");

// cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];
// for (let index in cities) {
//   console.log(`City at index ${index} is ${cities[index]}`);
// }
// for (let index = 0; index < cities.length; index++) {
//   console.log(`City at index ${index} is ${cities[index]}`);
// }

// for (let city of cities) {
//   console.log(`City: ${city}`);
// }

// let text = "some text";
// for (let char of text) {
//   console.log(`Character: ${char}`);
// }
// for (let index in text) {
//   console.log(`Character[${index}]: ${text[index]}`);
// }

// let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// let sum = 0;
// for(let i=0; i < arr.length; i++) {
//   console.log(`Iteration ${i+1}:`);
//   console.log(`\tarr[${i}] = ${arr[i]} after adding to sum of ${sum}`);
//   sum += arr[i];
//   if (sum > 100) {
//     break;
//   }
//   console.log(`\tSum so far: ${sum}`);
// }
// console.log(`Sum: ${sum}`);

// let arr = [1,2,3,4,5,6,7,8,9,10];
// let sum = 0;
// for(let i=0; i < arr.length; i++) {
//   console.log(`Iteration ${i+1}:`);
//   console.log(`\tarr[${i}] = ${arr[i]} before adding to sum of ${sum}`);
//   if (arr[i] % 2 === 0) {
//     console.warn(`\t\t${arr[i]} is even, skipping.`);
//     continue;
//   }
//   sum += arr[i];
//   console.log(`\t${arr[i]} is odd, adding to sum. Sum so far: ${sum}`);

// }
// console.log(`Sum of odd numbers: ${sum}`);


// Array
// let fruits = ["Apple", "Banana", 10, "Date", [1,2,3], {name: "Elderberry", color: "purple"}];
// let mixedArray = Array("Fig", 20, true, null, undefined, {type: "Grape"});
// console.log("Fruits array:", fruits);
// console.log("Mixed array:", mixedArray);
// console.log("First fruit:", fruits[0]);
// console.log("Last fruit:", fruits[fruits.length - 1]);
// console.log("Type of fruits:", typeof fruits);
// console.log("Is fruits an array?", Array.isArray(fruits));
// mixedArray[2] = "Changed value";
// console.log("Modified mixed array:", mixedArray);
// fruits[5].taste = "sweet";
// console.log("Modified fruits array:", fruits);

// console.log();
// console.log("Length of fruits array:",  fruits.length);
// console.log(fruits);
// fruits[10] = "Kiwi";
// console.log("Length of fruits array:",  fruits.length);
// console.log("Fruits array after adding at index 10:", fruits);
// console.log("Element at index 7 (not set):", fruits[7]);
// let fruits = ["Apple", "Banana", "Cherry", "Elderberry", "Strawberry", "Watermelon"];
// fruits.push("Fig");
// console.log("Fruits after push:", fruits);
// fruits.unshift("Mango");
// console.log("Fruits after unshift:", fruits);
// let removedFruit = fruits.pop();
// console.log("Removed fruit with pop:", removedFruit);
// console.log("Fruits after pop:", fruits);
// removedFruit = fruits.shift();
// console.log("Removed fruit with shift:", removedFruit);
// console.log("Fruits after shift:", fruits);
// let splicedFruits = fruits.splice(2,2);
// console.log("Spliced fruits:", splicedFruits);
// console.log("Fruits after splice:", fruits);
// splicedFruits = fruits.splice(1,0,"Pineapple","Grapes");
// console.log("Spliced fruits:", splicedFruits);
// console.log("Fruits after adding with splice:", fruits);
// let citrusFruits = ["Orange", "Lemon", "Lime"];
// let allFruits = fruits.concat(citrusFruits);
// allFruitsDuplicated = fruits + citrusFruits;
// console.log("All fruits after + operator:", allFruitsDuplicated, typeof allFruitsDuplicated);
// console.log("All fruits after concat:", allFruits);
// fruits.sort();
// console.log("Fruits after sort:", fruits);
// fruits.reverse();
// console.log("Fruits after reverse:", fruits);
// let index = fruits.indexOf("Pineapple");
// console.log("Index of Pineapple:", index);
// index = fruits.indexOf("Papaya");
// console.log("Index of Papaya (not found):", index);
// let slicedFruits = fruits.slice(1,4);
// console.log("Sliced fruits (1 to 4):", slicedFruits);
// slicedFruits = fruits.slice(3);
// console.log("Sliced fruits (from index 3):", slicedFruits);


let fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
// fruits.forEach((fruit, index, array) => {
//   console.log(`Fruit at index ${index} is ${fruit}`);
//   console.log(`\tBefore modification: ${array}`);
//   fruit = "Modified Fruit";
//   array[index] = fruit;
//   console.log(`\tAfter modification: Fruit at index ${index} is ${fruit}, -> ${array}`);
// });

let upperFruits = fruits.map((fruit, index, array) => {
  console.log(`Mapping fruit at index ${index}: ${fruit}`);
  return fruit.toUpperCase();
});
// let upperFruits = fruits.map((fruit) => fruit.toUpperCase());
console.log("Original fruits array after map:", fruits);
console.log("New upperFruits array from map:", upperFruits);

let filteredFruits = fruits.filter((fruit, index, array) => {
  console.log(`Filtering fruit at index ${index}: ${fruit}`);
  return fruit.length > 5;
});
console.log("Original fruits array after filter:", fruits);
console.log("New filteredFruits array from filter (length > 5):", filteredFruits);

filteredFruits = [];
for (let i = 0; i < fruits.length; i++) {
  console.log(`Filtering fruit at index ${i}: ${fruits[i]}`);
  if (fruits[i].length > 5) {
    filteredFruits.push(fruits[i]);
  }
}
console.log("New filteredFruits array from for loop (length > 5):", filteredFruits);
