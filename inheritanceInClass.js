const Science = class {
  constructor(name, standard, rollNo, grade) {
    this.name = name;
    this.standard = standard;
    this.rollNo = rollNo;
    this.grade = grade;
  }
  getDetails() {
    console.log(
      `${this.name} of Class: ${this.standard}, RollNo: ${this.rollNo}. Has Grades: ${this.grade}`
    );
  }
};

class Maths extends Science {
  constructor(grade, result) {
    super("Shivangi", "12th", "95");
    this.grade = grade;
    this.result = result;
  }
  getDetails() {
    console.log(`${this.name} of Class: ${this.standard}, RollNo: ${this.rollNo}, has Grades: ${this.grade}
    Result: ${this.result}`);
  }
}
const final = new Maths("B", "Pass");
final.getDetails();
