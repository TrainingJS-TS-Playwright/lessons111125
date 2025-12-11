class God{
  static create(){
    let array = [];
    array[0] = new Man('Adam');
    array[1] = new Woman('Eve');
    return array;
  }
}

class Human {
    constructor(name){
        this.name = name;
    }
}
class Woman extends Human {
    constructor(name){
        super(name);
    }
}
class Man extends Human {
    constructor(name){
    super(name);
    }
}

console.log(God.create());