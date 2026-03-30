class Ship {
  constructor(draft, crew) {
    this.draft = draft;
    this.crew = crew
  }
  isWorthIt() {
    let weight = this.draft - (this.crew * 1.5);
    return weight > 20;
  }
  
}


const titanic = new Ship(15, 10);
console.log(titanic.isWorthIt());