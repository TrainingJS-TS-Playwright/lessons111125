class Block{

  constructor([width, length, height]){
    this.width = width;
    this.length = length;
    this.height = height;
  }
  getWidth() {
    return this.width;
  }
  getLength() {
    return this.length;
  }
  getHeight() {
    return this.height;
  }
  getVolume(){
    return this.width * this.length * this.height;
  }
  getSurfaceArea(){
    return 2 * (this.length*this.width + 
    this.width*this.height + 
    this.length*this.height);  // SA = 2(lw + wh + lh)
  }

  
}

 let b = new Block([2,4,6]);
    console.log(b.getWidth()) // -> 2
    console.log(b.getLength());// -> 4
    console.log( b.getHeight());     // -> 6
    console.log(b.getVolume());  // -> 48
    console.log(b.getSurfaceArea());    // -> 88