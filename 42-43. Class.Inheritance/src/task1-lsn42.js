class Circle {
  constructor(radius) {
    this._radius = radius;
  }

  get radius() {
    return this._radius;
  }

  set radius(newRadius) {
    this._radius = newRadius;
  }

  get diameter() {
    return this._radius * 2;
  }

  calcArea() {
    return Math.PI * this._radius ** 2;
  }

  calcCircumference() {
    return 2 * Math.PI * this._radius;
  }
}

const myCircle = new Circle(10);

console.log(myCircle.radius);
console.log(myCircle.diameter);

myCircle.radius = 7;
console.log(myCircle.radius);

console.log(myCircle.calcArea());
console.log(myCircle.calcCircumference());
