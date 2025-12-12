class Quark {
    #color;
    #flavor;
    static validColor = ["red", "blue", "green"]
    static validFlavor = ['up', 'down', 'strange', 'charm', 'top', 'bottom']

    constructor(color, flavor) {
        this.color = color;
        this.flavor = flavor;
        this.baryon_number = 1 / 3;
    }
    set color(color) {
        if (Quark.validColor.includes(color)) {
            this.#color = color;
        }
    }
    get color() {
       return this.#color;
    }
    set flavor(flavor) {
        if (Quark.validFlavor.includes(flavor)) {
            this.#flavor = flavor
        }
    }
    get flavor() {
        return this.#flavor;
    }

    interact(quark) {
        [this.#color, quark.#color] = [quark.#color, this.#color];
    }
}


let q1 = new Quark("red", "up")
let q2 = new Quark("blue", "strange")
q1.color = 'pink' // checking that only valid colors can be assigned
q1.flavor = 'test' // checking that only valid flavors can be assigned
q1.interact(q2);
console.log(q1.color)
console.log(q2.color)
console.log(q1.flavor)


// https://www.codewars.com/kata/5882b052bdeafec15e0000e6/train/javascript