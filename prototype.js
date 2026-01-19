function Movie(title) {
  this.title = title;
  // this.getDetails = function () {
  //   console.log(`Title: ${this.title}`);
  // };
}

Movie.prototype.getDetails = function () {
  console.log(`Title: ${this.title}`);
};

Movie.prototype.year = 2014;

const movie1 = new Movie("The Avengers");
console.log("movie1: ", movie1);
movie1.year = 2012;
console.log(movie1);

const movie2 = new Movie("Avatar");

movie2.__proto__.year = 2019;

console.log(movie2);
console.log(movie2.__proto__);
console.log(movie1.__proto__.__proto__);
console.log(movie2.year);
console.log(Movie.prototype.year);

const inputs = [1, 2, 3, 4, 5];
console.log(inputs.__proto__.__proto__);

const cars = {
  getDetail(name) {
    console.log(`Your car is ${name}`);
  },
};
const car1 = Object.create(cars);
console.log(car1);
car1.getDetail("Audi");

const car2 = Object.assign(cars);
console.log(car2);

const car = {
  name: "car",
  color: "black",
  getDetailsOf(brand, seats) {
    console.log(`This is a ${this.color} ${this.name} of ${brand} company.
      It has ${seats} seats`);
  },
};
const bus = {
  name: "bus",
  color: "blue",
};
car.getDetailsOf("Audi", 5);
car.getDetailsOf.call(bus, "Star", 50);
car.getDetailsOf.apply(bus, ["Gold", 30]);

const veh1 = car.getDetailsOf.bind(bus, "Silver", 20);
veh1();
// veh1("Volvo", 100);

//**********Object Destucturing************//

const obj = {
  a: 1,
  b: 2,
  c: ["O", "B", "J"],
  d: { value: "val" },
};

//Binding Pattern
// const { a, b, c, d } = obj; //const a = obj.a
// console.log(a);
// console.log(c);

const { a: a1 } = obj;
console.log(a1);
// console.log(a);

//Assignment Patter
// let b;
// ({ b: b } = obj);
// console.log(b);

const fruits = ["apple", "Mango", "Kiwi", "Berry", "Banana", "Lichi"];

//********Binding Patter**********//

// const [a, , , k] = fruits;
// console.log(a, k);

const [a, m, ...[, be, ba]] = fruits;
console.log(ba);
