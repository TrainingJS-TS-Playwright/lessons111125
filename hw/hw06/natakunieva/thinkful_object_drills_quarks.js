class Quark {
    baryon_number = 1/3;
    constructor(color, flavor) {
        this.color = color;
        this.flavor = flavor;
    }
    interact(secondQuark) {
        let temp = this.color;
        this.color = secondQuark.color;
        secondQuark.color = temp ;    
    }
}

let quark1 = new Quark ('red', 'up');
console.log(quark1.color);
console.log(quark1.flavor);
console.log(quark1.baryon_number);

let quark2 = new Quark ('blue', 'strange');
console.log(quark2.color);
console.log(quark2.flavor);
console.log(quark2.baryon_number);

quark1.interact(quark2);
console.log(quark1.color);
console.log(quark2.color);