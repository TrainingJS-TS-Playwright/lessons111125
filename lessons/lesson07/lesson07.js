// a = 1; // global variable
// var b = 2; // local variable
// let c = 3; // block-scoped variable
// const d = {}; // constant variable
// // d = { key: 'value' }; // This will cause an error because 'd' is a constant
// d.key = 'value'; // This is allowed, as we are modifying the contents of the object, not reassigning it

// console.log(d); // 1
// // for (var i = 0; i < 3; i++) {
// //     console.log(i); // 2
// // }
// console.log("before loop:"); // 3
// for (var i = 0; i < 3; i++) {
//     setTimeout(function() {
//         console.log("(var) inside timeout:"); // 1
//         console.log(i); // 2
//     }, 1000);
// }
// console.log("after loop:"); // 4

// console.log("before loop:"); // 3
// for (let i = 0; i < 3; i++) {

//     setTimeout(function() { 
//         console.log("(let) inside timeout:"); 
//         console.log(i);
//     }, 1000);
// }
// console.log("after loop:"); 

let a = {
    name: "Daria",
    age: 30,
};

function run1() {
    console.log("run1");
    console.log(this);
}

const run2 = () => {
    console.log("run2");
    console.log(this);
}

function run3(scope) {
    this = scope;
    console.log("run3");
}
console.log("global scope:");
console.log(this);
console.log("----");
run1();
console.log("----");
run2();
console.log("----");
run3(this);
console.log("----");