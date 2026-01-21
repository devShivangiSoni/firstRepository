class Circle {
  constructor(radius) {
    this.radius = radius;
    this.circlediameter = function () {
      console.log(this.diameter);
    };
  }
  calculateDiameter() {
    return this.radius * 2;
  }

  get diameter() {
    return this.radius * 2;
  }

  set setDiameter(diameter) {
    if (diameter >= 0) {
      this.radius = diameter / 2;
    } else {
      console.log("Invalid input!");
    }
  }
}
const circle = new Circle(4);
console.log("circle: ", circle);
console.log(circle.radius);
console.log(circle.diameter);
circle.calculateDiameter();
circle.circlediameter();
circle.setDiameter = 10;
console.log(circle.radius);
circle.setDiameter = 10;
console.log(circle.radius);
console.log(circle.diameter);
