class Vec {
  constructor(x,y) {
    this.x = x;
    this.y = y;
  }
  plus(par) {
      const sum = new Vec((this.x + par.x),(this.y + par.y))
      return sum;
  }
  minus(par) {
      const sum = new Vec((this.x - par.x),(this.y - par.y))
      return sum;
  }
  get length() {
      var square = (this.x * this.x) + (this.y * this.y)
      var sum = Math.sqrt(square)
      return sum;
  }
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5
