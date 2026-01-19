function Vehical(name, color, wheels) {
  this.name = name;
  this.color = color;
  this.wheels = wheels;

  this.getDetails = function () {
    console.log(`The ${this.name} is ${this.color} in color.
 It has ${wheels} wheels`);
  };
}

// const car = new Vehical("car", "blue", 4);
// car.getDetails();

//********Class expression**********/

// const Vehical =class{
// }

//*******Classes in JS .....Class declaration*********/

class VehicalCL {
  //Properties
  name;
  color;
  wheels;

  //Constructor\
  constructor(name, color, wheels) {
    this.name = name;
    this.color = color;
    this.wheels = wheels;
  }
  //Methods
  getDetails() {
    console.log(`The ${this.name} is of ${this.color} color
      It has ${this.wheels} wheels`);
  }
}

const veh1 = new VehicalCL("Activa", "Grey", "2");
console.log(veh1);
veh1.getDetails();

class Student {
  name;
  rollNo;
  subject;
  marks;
  grade;

  constructor(name, rollNo, subject, marks, grade) {
    this.name = name;
    this.rollNo = rollNo;
    this.subject = subject;
    this.marks = marks;
    this.grade = grade;
  }

  getStudentDetails() {
    console.log(
      `${this.name} of rollNo ${this.rollNo} scored ${this.marks} marks in ${this.subject} and got ${this.grade} Grade`
    );
  }
}

const student1 = new Student("Shivangi", "95", "Biology", "75", "B+");
console.log(student1);
student1.getStudentDetails();
