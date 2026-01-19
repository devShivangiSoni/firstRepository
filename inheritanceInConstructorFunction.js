function Vehicals(name, color, wheels) {
  this.name = name;
  this.color = color;
  this.wheels = wheels;
}
Vehicals.prototype.getVehDetails = function () {
  console.log(`${this.name}\n${this.color}\n${this.wheels}`);
};

function Car(color, brand, seats) {
  Vehicals.call(this, "Scropio", color, "4");
  this.brand = brand;
  this.seats = seats;
}
Car.prototype = Object.create(Vehicals.prototype);

Car.prototype.getDetails = function () {
  console.log(`The ${this.color} ${this.name} is of ${this.brand} company.
        It has seating of ${this.seats} people`);
};

const car1 = new Car("Black", "Swift", "5");
console.log("car1: ", car1);
car1.getDetails();
car1.getVehDetails();
