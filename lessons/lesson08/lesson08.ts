// let b: string; 
// let a: number = 10;
// b = "Hello";
// console.log(a);
// console.log(b);

// b = "10";

// let c;
// c = 20;
// c = "Twenty";
// let d = 30;
// d = "Thirty"; // Error

// let arrStr: string[] = [];
// arrStr.push("Hello");
// // arrStr.push(10); // Error

// let arrNum: Array<number> = [];
// arrNum.push(20);
// // arrNum.push("Twenty"); // Error

// let arrMix: (string | number)[] = [];
// let arrMix2: Array<string | number> = [];
// arrMix.push("Hello");
// arrMix.push(30);
// arrMix2.push("World");
// arrMix2.push(40);
// arrMix.push(true); // Error
// arrMix2.push(false); // Error
// let tuple: [string, number];
// tuple = ["Age", 25];
// tuple = [25, "Age"]; // Error
// tuple = ["Age", 25, true]; // Error
// tuple = ["Age"]; // Error

// enum Color {
//     Red,
//     Green,
//     Blue
// }

// let c: Color;
// c = Color.Red;
// c = Color.Green;
// c = Color.Blue;

// console.log(c);

// enum Color {
//     Red = "RED",
//     Green = 2,
//     Blue = 4
// }

// let c1,c2,c3: Color, c:Number;
// c1 = Color.Red;
// c2 = Color.Green;
// c3 = Color.Blue;
// console.log(c1);
// console.log(c2);
// console.log(c3);
// // c = 10; // Error
// // c = "Red"; // Error

// function printInfo(name: string, age: number): void {
//     console.log(`Name: ${name}, Age: ${age}`);
// }

// printInfo("Alice", 30);
// // let a = printInfo("Bob", "25");
// function add(a: number, b: number): number {
//     return a + b;
// }
// let sum: number, result: string;
// sum = add(10, 20);
// // add(10, "20"); // Error
// // result = add(10, 20); // Error
// result = add(10, 20) + ""; // Force to string

// function multiply1(a: number, b?: number): number | string {
//     if (b !== undefined) {
//         return a * b;
//     }
//     return `${a} * ${a}`;
// }
// multiply1(5, 4);
// multiply1(5);
// multiply1(5, 1,2); // Error
// function multiply2(a: number, b: number): number | string {
//     if (b !== undefined) {
//         return a * b;
//     }
//     return `${a} * ${a}`;
// }
// multiply2(5, 4);
// multiply2(5);
// function multiply3(a: number, b: number=100): number {

//     return a * b;
// }
// multiply3(5, 4);
// multiply3(5);

// function add(a:number, b:number): number;
// function add(a:number, b:string): string;
// function add(a:string, b:string): string;
// function add(a:string, b:number): string;
// function add(a: any, b: any): any {
//     if (typeof a === "string" || typeof b === "string") {
//         return a + b;
//     } else if (typeof a === "number" && typeof b === "number") {
//         return a + b;
//     } else if (typeof a === "string" && typeof b === "number") {
//         return a + (b*a.length).toString();
//     } else if (typeof a === "number" && typeof b === "string") {
//         return b + (a*b.length).toString();
//     }
// }

// let r1 = add(10, 20); // number
// let r2 = add("Hello, ", "World!"); // string
// let r3 = add("Age: ", 5); // string
// let r4 = add(7, " days"); // string

// function add2(a: number | string, b: number | string): (number | string) {
//     if (typeof a === "string" || typeof b === "string") {
//         return a + b;
//     } else if (typeof a === "number" && typeof b === "number") {
//         return a + b;
//     } else if (typeof a === "string" && typeof b === "number") {
//         return a + (b*a.length).toString();
//     } else if (typeof a === "number" && typeof b === "string") {
//         return b + (a*b.length).toString();
//     }
//     return "";
// }

// function printDetails(id: number | string, name: string, ...positions: string[]): void {
//     console.log(`ID: ${id}, Name: ${name}`);
//     if (positions.length > 0) {
//         console.log(`Positions: ${positions.join(", ")}`);
//     }
// }

// printDetails(1, "Alice", "Manager", "Team Lead");
// printDetails("E002", "Bob");

// class Person {
//     private name: string;
//     protected age: number;
//     public email: string;
//     constructor(name: string, age: number, email: string) {
//         this.name = name;
//         this.age = age;
//         this.email = email;
//     }
//     public getInfo(): string {
//         return `Name: ${this.name}, Age: ${this.age}, Email: ${this.email}`;
//     }
//     public setName(name: string): void {
//         this.name = name;
//     }
// }

// let person1 = new Person("Alice", 30, "test@test.com");
// console.log(person1.getInfo());
// person1.setName("Alicia");
// console.log(person1.getInfo());
// // console.log(person1.name); // Error
// // console.log(person1.age); // Error
// console.log(person1.email);


// let persons: Person[] = [];
// persons.push(new Person("Bob", 25, "test1@test.com"));
// persons.push(new Person("Bob1", 25, "test2@test.com"));
// persons.push(new Person("Bob2", 25, "test3@test.com"));


namespace Geometry {
    export interface Shape {
        area(): number;
        perimeter(): number;
    }
    export class Rectangle implements Shape {
        constructor(private width: number, private height: number) {}
        area(): number {
            return this.width * this.height;
        }
        perimeter(): number {
            return 2 * (this.width + this.height);
        }
    }
    export class Circle implements Shape {
        constructor(private radius: number) {}
        area(): number {
            return Math.PI * this.radius * this.radius;
        }
        perimeter(): number {
            return 2 * Math.PI * this.radius;
        }
    }
}   

let shapes: Geometry.Shape[] = [];
let rectangles: Geometry.Rectangle[] = [];
let circles: Geometry.Circle[] = [];
shapes.push(new Geometry.Rectangle(10, 20));
shapes.push(new Geometry.Circle(15));
rectangles.push(new Geometry.Rectangle(5, 10));
// rectangles.push(new Geometry.Circle(7));
circles.push(new Geometry.Circle(7));
// circles.push(new Geometry.Rectangle(5, 10));
