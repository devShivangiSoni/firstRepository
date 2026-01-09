/** Conditionals in JS */

/** if statement */

// Print Number is even if Number is even

// let num = prompt("Please enter the number");
let num = 24;

if (num % 2 == 0) {
  console.log("Number is even");
}
console.log("Came outside");

let number = 23;

// let month = prompt("Enter the month number");

// if (month > 1 && month <= 3) {
//   console.log("first quater");
// } else if (month >= 4 && month <= 6) {
//   console.log("second quater");
// } else if (month >= 7 && month <= 9) {
//   console.log("thirt quater");
// } else if (month >= 10 && month <= 12) {
//   console.log("forth quater");
// } else {
//   console.log("invalid month");
// }

let input = 17;

if (input < 18) {
  console.log("denied");
} else {
  console.log("garnted");
}

function main(marks) {
  let result;
  if (marks >= 90) {
    result = "A grade";
  } else if (marks >= 80 && marks <= 89) {
    result = "B grade";
  } else if (marks >= 70 && marks <= 79) {
    result = "C grade";
  } else if (marks >= 60 && marks <= 69) {
    result = "D grade";
  } else {
    result = "F grade";
  }

  return result;
}

main(89);
main(93);

// const email = prompt("Enter the Email add");
// const emailLen = email.length;
// console.log("emailLen", emailLen);

// const dotIndex = email.lastIndexOf(".");
// console.log("dotIndex", dotIndex);

// const atIndex = email.lastIndexOf("@");
// console.log("atIndex", atIndex);

// const lastIndex = emailLen - 1;
// console.log("lastIndex", lastIndex);

// if (
//   emailLen < 11 ||
//   lastIndex - dotIndex < 2 ||
//   lastIndex - dotIndex > 3 ||
//   dotIndex - atIndex < 3
// ) {
//   console.log("invalid Email");
// }

let age = 18;
let testPassed = false;

if (age >= 18) {
  console.log("eligible");
  if (testPassed) {
    console.log("congratulation! ");
  } else {
    console.log("sorry!");
  }
} else {
  console.log("not eligible");
}

//Switch statement

let color = "yellow";

switch (color) {
  case "red":
    console.log("stop!");
    break;
  case "yellow":
    console.log("caution");
  // break;
  case "green":
    console.log("goo");
    break;
  default:
    console.log("invalid color");
}

// let num1 = 10;
// let num2 = 19;
// let greater;

// if (num1 > num2) {
//   greater = num1;
// } else {
//   greater = num2;
// }

// console.log("Greater num is " + greater);

//Ternary Operators

// let num1 = 10;
// let num2 = 59;
// let num3 = 50;
// let greater =
//   num1 > num2 ? (num1 > num3 ? num1 : num3) : num2 > num3 ? num2 : num3;
// console.log("Greater num is " + greater);

// let num1 = 10;
// let num2 = 19;
// let greater = num1 > num2 ? num1 : num2;
// console.log(greater);

function CheckMail(email) {
  let result;

  const atIndex = email.lastIndexOf("@");

  const dotIndex = email.lastIndexOf(".");

  const emailLen = email.length;

  console.log("emailLen", emailLen);

  const lastIndex = emailLen - 1;

  if (atIndex >= 3 && dotIndex - atIndex >= 4 && emailLen - dotIndex >= 2) {
    result = "welcome" + email;
  } else {
    result = "invalid email";
  }

  return result;
}
let value = CheckMail("abc@xyz.in");
console.log("value =======", value);
