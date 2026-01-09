// let m1 = 20;
// let m2 = 15;
// let m3 = 10;
// let avg = m1 + m2 + m3 / 3;//this is wrong as per the precedance table
// let avg = (m1 + m2 + m3) / 3;
// console.log(avg);

// Type coercion

// console.log(5 + 5);

// let num = "5" + 5;

// console.log("5" + 5);
// console.log(typeof num);

// let fullName = "shivam" + " " + "shivangi";

// console.log(fullName);

// let sub = "55" - 10;
// console.log(sub);
// console.log("4" * 2);

// Type conversion

/*** Convert to String ***/

//String()
console.log(String(100));
console.log(String(true));
console.log(String(null));
console.log(String(undefined));

//toString()
console.log((123).toString());

/*** Convert to Number ***/

// Number()
console.log("***NUMBER***");
console.log(Number("25"));
console.log(Number("value"));
console.log(Number(false));

// Unary + operator --- works on Variables

let a = "123";
let b = "123shiv";
console.log(+a);
console.log(+b);

// parseFloat()
let num = 1.2;
console.log(num);
console.log(parseFloat("123.45shiv"));
// parseInt()
console.log(parseInt("123.45shiv"));

/** Convert to Boolean */
// Boolean();
console.log(Boolean("yes"));

let x = 77;
let y = 84;
let z = 90;

let score = (x > 80 && y > 80) || (x > 80 && z > 80) || (y > 80 && z > 80);

console.log(score);

function isEligible(mathScore, englishScore, scienceScore) {
  let eligibleForScholarship;
  eligibleForScholarship =
    (mathScore > 80 && englishScore > 80) ||
    (scienceScore > 80 && mathScore > 80) ||
    (englishScore > 80 && scienceScore > 80);

  let qualifiesForScienceFair;
  qualifiesForScienceFair = mathScore + scienceScore + englishScore >= 250;

  let eligibleForAward;
  eligibleForAward = eligibleForScholarship || qualifiesForScienceFair;

  return eligibleForScholarship;
}

let marks = isEligible(84, 77, 93);
console.log(marks, "yes");

student1Score = "90";
student2Score = "96";
student3Score = "77";

// function calculateAverage(student1Score, student2Score, student3Score) {
//   let averageScore;
//   averageScore =
//     (Number(student1Score) + Number(student2Score) + Number(student3Score)) / 3;
//   return averageScore;
// }
// console.log(averageScore);

let original = "50.75";
let discount = "15.5";

function shoppingDiscountCalculator(original, discount) {
  let answer;
  answer = (parseFloat(original) * parseFloat(discount)) / 100;

  return answer;
}
let totals = shoppingDiscountCalculator(50.75, 15.5);
console.log(parseFloat(original) - totals);

let Temperature = 35;
function temperatureInCelcius(temperatureInCelsius) {
  let fahrenheit;
  fahrenheit = (temperatureInCelsius * 9) / 5 + 32;

  checking = fahrenheit > 86;

  let isHot;
  isHot = temperatureInCelcius > 86;

  return isHot;
}
let value = temperatureInCelcius(temperatureInCelcius > 86);
console.log(value);
