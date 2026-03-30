class Person {
  constructor(name, age) {
  this.name = String(name);
  this.age = +age;
  }
  get info() {
    return `${this.name}s age is ${this.age}`;
  }
}
let person1 = new Person('John', 34);
console.log(person1.info);