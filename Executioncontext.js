var userName = "Tom";
var userAge = 10;
console.log(`username: ${userName}`);
console.log(`userage: ${userAge}`);

greetUser(userName);

function greetUser(name) {
  console.log(`************************************`);
  var greet = "I hope you are doing fine.";
  console.log(`hello ${name}, ${greet}`);
  var currentYear = 2030;
  const year = birthYear(currentYear, userAge);
  console.log(`************************************`);
  return `Your birth year is ${year}`;
}

function birthYear(year, age) {
  console.log(`Calculate the birth year`);
  return year - age;
}

var bYear = greetUser(userName);
console.log(bYear);

function facrorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * facrorial(n - 1);
}
console.log(facrorial(5));

function foo() {
  console.log("hello from foo!");
}
function bar() {
  foo();
  console.log("hello from bar");
}
function baz() {
  bar();
  console.log("hello from baz");
}
baz();
