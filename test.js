const Dog = class {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} says woof!`);
  }
};

class Cat {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} says meow!`);
  }
}

function createAnimal(type) {
  if (type === "dog") {
    return new Dog("Buddy");
  } else if (type === "cat") {
    return new Cat("Whiskers");
  } else {
    return null;
  }
}
const d = createAnimal("dog");
d.speak();

//Create the class with ES6 standard with mentioned properties and methods.
//Do not alter the starter Code
function main() {
  //Implement your class here
  class Person {
    name;
    age;
    gender;

    speak() {
      console.log(
        `Hello, my name is ${this.name} and I am ${this.age} years old.`,
      );
    }

    constructor(name, age, gender) {
      this.name = name;
      this.age = age;
      this.gender = gender;
    }
  }

  const person1 = new Person("john", 20, "M");
  person1.speak();

  class Student {
    person;
    major;
    gpa;

    study() {
      console.log(`I am studying ${this.major} and my GPA is ${this.gpa}.`);
    }
    speak() {
      console.log(
        `Hello, my name is ${this.person.name} and I am ${this.person.age} years old. I am also a student studying ${this.major}.`,
      );
    }

    constructor(person, major, gpa) {
      this.person = person;
      this.major = major;
      this.gpa = gpa;
    }
  }

  const stud1 = new Student(person1, "CS", 9);
  stud1.speak();
  stud1.study();

  return { Person, Student };
}
main();

function Car(nameert, color) {
  this.name = nameert;
  this.color = color;
}

Car.prototype.getDetails = function () {
  console.log(`The car ${this.name} has ${this.color} color`);
};

const car1 = new Car("Scropio", "Black");
console.log(car1.hasOwnProperty("getDetalis"));
car1.getDetails();

//*************Encapsulation in Class *************/

class Document {
  name;
  #regNum;

  constructor(name, number) {
    this.name = name;
    this.#regNum = number;
  }
  #method1(num) {
    return num;
  }
  method2() {
    console.log(`${this.name} has RegNum: ${this.#method1(this.#regNum)}`);
  }
}
const Details = new Document("Shivangi", 8198);
console.log(Details);
Details.method2();
// Details.#method1();
// Details.#method1();//can't access this from outside because it is encapsulated in class

//***************Inheritance in Class ***************/
class Vehicals {
  wheels = 4;
  constructor(brand) {
    this.brand = brand;
  }
  startEngine() {
    console.log("Engine started.");
  }
}
class Cars extends Vehicals {
  constructor(brand, model) {
    super(brand);
    this.model = model;
  }
  getWheels() {
    return this.wheels;
  }
}
const myCar = new Cars("Toyota", "Camry");
console.log(myCar.getWheels());

class Animal {
  constructor() {
    console.log("Animal constructor executed.");
  }
}
class Dogs extends Animal {
  constructor() {
    super();
    console.log("Dog constructor executed.");
  }
}
const myDog = new Dogs();

class Student {
  study() {
    return "Studying";
  }
}

class Employee {
  work() {
    return "Working";
  }
}

class Person {
  constructor() {
    this.student = new Student();
    this.employee = new Employee();
  }
}

const p = new Person();
console.log(p.student.study());
console.log(p.employee.work());
