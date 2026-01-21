const Vehical = class {
  static Sname = "Static name";
  constructor(name, color, seats) {
    this.name = name;
    this.color = color;
    this.seats = seats;
  }
  method1() {
    console.log(
      `Name of the car is ${this.name}of ${this.color} color having ${this.seats} seats `,
    );
  }
  static staticFunction() {
    console.log(`This is a static funtion`);
  }
};

const v1 = new Vehical("Scorpio", "Black", "5");
console.log(v1);
console.log(Vehical.Sname);
Vehical.staticFunction();