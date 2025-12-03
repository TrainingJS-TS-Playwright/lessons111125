// "use strict";

// let employee = {
//     firstName: "Peter",
//     lastName: "Peterson",
//     position: "developer",
//     experience: 4
// }

// console.log(employee);
// employee.experience = 5;
// console.log(employee);
// function promote(emp, newPosition) {
//     emp.position = newPosition;
// }
// promote(employee, "senior developer");
// console.log(employee);

// console.log("First Name:", employee.firstName);
// console.log("Last Name:", employee["lastName"]);
// console.log("Position:", employee.position2); // undefined
// console.log("Experience:", employee["experience2"]); // undefined


// let employee = {
//     firstName: "Peter",
//     lastName: "Peterson",
//     position: "developer",
//     experience: 4,
//     getFullName: function() {
//         console.log(this);
//         return this.firstName + " " + this.lastName;
//     }
// }
// let employee2 = {
//     firstName: "John",
//     lastName: "Johnson",
//     position: "designer",
//     experience: 3
// }
// console.log("Full Name:", employee.getFullName());
// console.log(this);
// // console.log("Full Name:", employee2.getFullName()); // Error

// let employee = new Object();
// console.log(employee);
// employee.firstName = "Peter";
// employee.lastName = "Peterson";
// employee.position = "developer";
// employee.experience = 4;
// console.log(employee);
// employee.getFullName = function() {
//     return this.firstName + " " + this.lastName;
// }
// console.log("Full Name:", employee.getFullName());

// function Employee(firstName, lastName, position, experience) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.position = position;
//     this.experience = experience;
//     this.getFullName = function() {
//         return this.firstName + " " + this.lastName;
//     }   
// }
// let employee1 = new Employee("Peter", "Peterson", "developer", 4);
// console.log(employee1);
// let employee2 = new Employee("John", "Johnson", "designer", 3);
// console.log(employee2);
// console.log("Employee 1 Full Name:", employee1.getFullName());
// console.log("Employee 2 Full Name:", employee2.getFullName());

// console.log("Type of Employee:", typeof Employee);
// console.log("Type of employee1:", typeof employee1);
// console.log("Is employee1 instance of Employee?", employee1 instanceof Employee);

// class Employee {
//     static validPositions = ["developer", "designer", "manager"];

//     constructor(firstName, lastName, position, experience) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         if (Employee.validPositions.includes(position)) {
//             this.position = position;
//         } else {
//             this.position = "intern";
//         }
//         this.experience = experience;
//     }
//     getFullName() {
//         return this.firstName + " " + this.lastName;
//     }
//     printDetails() {
//         console.log(`Name: ${this.getFullName()}, Position: ${this.position}, Experience: ${this.experience} years`);
//     }
//     changePosition(newPosition) {
//         this.position = newPosition;
//     }
//     static companyPolicy() {
//         // console.log(this); // refers to the class itself
//         console.log("All employees must adhere to company policies.");
//     }
// }

// let employee1 = new Employee("Peter", "Peterson", "developer", 4);
// console.log(employee1);
// let employee2 = new Employee("John", "Johnson", "designer", 3);
// employee2.printDetails();
// employee2.changePosition("senior designer");
// employee2.printDetails();
// let employee3 = new Employee("Alice", "Smith", "student", 1);
// employee3.printDetails();
// employees = [employee1, employee2, employee3];

// for (let emp of employees) {
//     emp.printDetails();
// }

// // Employee.printDetails(); // Error

// Employee.companyPolicy();
// // employee1.companyPolicy(); // Error
// console.log("Type of Employee:", Employee.validPositions);
// console.log("Type of employee1:", employee1.validPositions);



// class Employee {
//     static _validPositions = ["developer", "designer", "manager"];

//     constructor(firstName, lastName, position, experience) {
//         this._firstName = firstName;
//         this._lastName = lastName;
//         if (Employee._validPositions.includes(position)) {
//             this._position = position;
//         } else {
//             this._position = "intern";
//         }
//         this._experience = experience;
//     }
//     getFullName() {
//         return this._firstName + " " + this._lastName;
//     }
//     printDetails() {
//         console.log(`Name: ${this.getFullName()}, Position: ${this._position}, Experience: ${this._experience} years`);
//     }
//     changePosition(newPosition) {
//         this._position = newPosition;
//     }
//     static companyPolicy() {
//         // console.log(this); // refers to the class itself
//         console.log("All employees must adhere to company policies.");
//     }
//     get position() {
//         return this._position;
//     }
//     set position(newPosition) {
//         if (Employee._validPositions.includes(newPosition)) {
//             this._position = newPosition;
//         } else {
//             console.log(`Invalid position: ${newPosition}. Position not changed.`);
//         }
//     }
// }

// let employee1 = new Employee("Peter", "Peterson", "developer", 4);
// console.log(employee1);
// employee1.firstName = "Changed"; // does not change the actual property
// console.log("First Name:", employee1._firstNamefirstName); // still "Peter"
// console.log(employee1);
// console.log("Current Position:", employee1.position);
// employee1.position = "senior developer"; // invalid position
// console.log("Current Position after invalid change:", employee1.position);



class Human {

    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this._species = "Homo sapiens";
    }
    getFullName() {
        return this.firstName + " " + this.lastName;
    }
    isAdult() {
        return this.age >= 18;
    }
    introduce() {
        console.log("Human introducing myself:");
        console.log(`Hello, my name is ${this.getFullName()} and I am ${this.age} years old.`);
    }
}
let human1 = new Human("Emily", "Davis", 25);
console.log(human1);
human1.introduce();
console.log("Is Adult:", human1.isAdult());
class Employee extends Human {
    constructor(firstName, lastName, age, position, experience) {
        super(firstName, lastName, age);
        this.position = position;
        this.experience = experience;
    }
    introduce() {
        super.introduce();
        console.log(`I work as a ${this.position} with ${this.experience} years of experience. ${this._species}`);
    }
}
let employee1 = new Employee("Michael", "Brown", 30, "developer", 5);
console.log(employee1);
employee1.introduce();
console.log("Is Adult:", employee1.isAdult());


