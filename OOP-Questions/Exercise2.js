class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.calculateArea = function () {
      return this.width * this.height;
    };
    this.calculatePerimeter = function () {
      return 2 * (this.width + this.height);
    };
  }
}
const rectangle = new Rectangle(4, 7);

console.log("Calculated Area: ", rectangle.calculateArea());
console.log("Calculated Area: ", rectangle.calculatePerimeter());
