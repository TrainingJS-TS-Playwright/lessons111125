// import PI,  {Point, Line, calculateArea} from './models';
// // import {Rectangle, Circle} from './lesson08';

// let point: Point = new Point(10, 20);
// console.log(point.getCoordinates());
// // point.setCoordinates(30, "40");
// console.log(point.getCoordinates());


import * as f from './models';

console.log("PI:", f.PI);
console.log("Circumference (d=10):", f.calculateCircumference(10));
console.log("Area (r=5):", f.calculateArea(5)); 
let line: f.Line = new f.Line(new f.Point(0, 0), new f.Point(3, 4));


interface User {
    id: number;
    name: string;
    email?: string; // optional property
}

let user1: User = {id: 1, name: "Alice"};
let user2: User = {id: 2, name: "Bob", email: "bob@example.com"};

function getUserInfo(user: User): string {
    return `ID: ${user.id}, Name: ${user.name}, Email: ${user.email ?? "N/A"}`;
}
console.log(getUserInfo(user1));
console.log({id: 2, name: "Bob", email: "bob@example.com"});
console.log({id: 2, name: "Bob", email: "bob@example.com", age: 30}); // Error

function p(a){
    return a;
}