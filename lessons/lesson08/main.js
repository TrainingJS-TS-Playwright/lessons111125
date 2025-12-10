"use strict";
// import PI,  {Point, Line, calculateArea} from './models';
// // import {Rectangle, Circle} from './lesson08';
Object.defineProperty(exports, "__esModule", { value: true });
// let point: Point = new Point(10, 20);
// console.log(point.getCoordinates());
// // point.setCoordinates(30, "40");
// console.log(point.getCoordinates());
var f = require("./models");
console.log("PI:", f.PI);
console.log("Circumference (d=10):", f.calculateCircumference(10));
console.log("Area (r=5):", f.calculateArea(5));
var line = new f.Line(new f.Point(0, 0), new f.Point(3, 4));
var user1 = { id: 1, name: "Alice" };
var user2 = { id: 2, name: "Bob", email: "bob@example.com" };
function getUserInfo(user) {
    var _a;
    return "ID: ".concat(user.id, ", Name: ").concat(user.name, ", Email: ").concat((_a = user.email) !== null && _a !== void 0 ? _a : "N/A");
}
console.log(getUserInfo(user1));
console.log({ id: 2, name: "Bob", email: "bob@example.com" });
console.log({ id: 2, name: "Bob", email: "bob@example.com", age: 30 }); // Error
function p(a) {
    return a;
}
