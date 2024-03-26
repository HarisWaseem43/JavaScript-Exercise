class Shape {
  constructor() {
    this.calculateArea = function () {};
  }
}
class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
    this.calculateArea = function () {
      return Math.PI * this.radius * this.radius;
    };
  }
}
class Triangle extends Shape {
  constructor(base, height) {
    super();
    this.base = base;
    this.height = height;
    this.calculateArea = function () {
      return 0.5 * this.base * this.height;
    };
  }
}
const circle = new Circle(4);

console.log("Area of a Circle: ", circle.calculateArea());

const triangle = new Triangle(3, 7);
console.log("Area of a Triangle: ", triangle.calculateArea());
