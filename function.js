//** Function in JS */

let sum1 = sum(5, 6);
console.log(sum1);

function sum(a, b) {
  return a + b;
}

// Function Expression / Anomynamun function

const sum2 = function (a, b) {
  return a + b;
};

console.log(sum2(1, 8));

//********************ARROW FUNCTION*********************

var prod = (num1, num2) => num1 * num2;

console.log(prod(2, 3));

//IIFE (Immediately Invoked Function Expression)
(function (a, b) {
  console.log(a ** b);
})(4, 2);

const user = (function () {
  const userData = {
    userName: "john",
    userAge: 20,
  };

  function getName() {
    console.log(userData.userName);
  }

  function updateAge(age) {
    console.log(userData.userAge + age);
  }
  return { getName, updateAge };
})();
console.log(user);
console.log(user.userData);
user.getName();
user.updateAge(3);

function main() {
  const counter = (function () {
    //Define the private variable to store the count
    let count = 1;

    // Define the Increment function
    function increment() {
      count++;
      return `count after increment : ${count}`;
    }

    // Define the Decrement function
    function decrement() {
      count--;
      return `count after decrement : ${count}`;
    }
    return {
      increment,
      decrement,
    };
    // Return the increment and decrement functions as part of the counter object
  })();

  return counter;
}

const counter = main();
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());

//***********Pure functions************

function calculate(num1, num2) {
  return num1 * num2;
}
console.log(calculate(4, 6));

//Refactor the given impure function to pure function.
function removeVowels(moto) {
  // Hint: To make this function pure, do not modify the original obj.
  // Instead, create and return a new object with the modified value.
  return {
    ...moto, // copy all properties
    value: moto.value.replace(/[aeiou]/gi, ""),
  };
}

// you don't need to do anything below.
//you can use it for testing the code.
let strObj = {
  value: "Hello World",
  age: 23,
};

//For pure function
let newObj = removeVowels(strObj);
removeVowels(strObj);
console.log("strObj: ", strObj);

console.log(newObj.value);

function sum(a, b) {
  let c = a + b;
  return c;
}
console.log("**********************************************************");

//*****************Callback functions *****************/
function greet(wish) {
  console.log(`${wish()},Welcome to the JavaScript`);
}

function sayHi() {
  return "Hi";
}

function sayHello() {
  return "Hello";
}

function goodMorning() {
  return "Good Morning";
}

greet(sayHi);
greet(sayHello);
greet(goodMorning);

//** ******************Function returning functions**********************/

function greet(message) {
  return function wish(wishes) {
    console.log(`${wishes}, ${message}`);
  };
}

// const greeting = greet("I hope you're doing well");
// greeting("hello");

greet("Welcome to the session")("Hi");

//****************Higher order functions***********************/

const inputs = [2, 3, 4, 5, 6, 7, 8, 12, 1, 4, 16];

// function square(input) {
//   const squared = [];
//   for (let num of input) {
//     squared.push(num * num);
//   }
//   return squared;
// }

// function cubic(input) {
//   const cubes = [];
//   for (let num of input) {
//     cubes.push(num * num * num);
//   }
//   return cubes;
// }

// console.log(square(inputs));
// console.log(cubic(inputs));

function operation(input, fn) {
  const output = [];
  for (let num of input) {
    output.push(fn(num));
  }
  return output;
}

function square(number) {
  return number * number;
}

function cube(number) {
  return number * number * number;
}

console.log(operation(inputs, square));
console.log(operation(inputs, cube));

//********************Curring in JS ********************/
// function add1(a, b, c) {
//   return a + b + c;
// }
// console.log(add1(2, 3, 4));

// function add2(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }
// console.log(add2(2)(3)(4))

// function power(a, b) {
//   return b ** a;
// }

function power(b) {
  return function (a) {
    return a ** b;
  };
}

let squares = power(2);
console.log(squares);
console.log(squares(4));
console.log(squares(3));
console.log(squares(11));

const cubeies = power(3);
console.log(cubeies(4));
console.log(cubeies(2));

//***************Map function****************

const arr = [2, 4, 6, 8, 7];

// const squaredArray = input.map(function (currentElement) {
//   return currentElement * currentElement;
// });

const squaredArray = arr.map((num, index) => num * num);
console.log(squaredArray);

const numbers = [2, 4, 6, 8, 10];

const halfOfNum = numbers.map((num) => num / 2);
console.log(halfOfNum);

//**************Reduce function****************/

let inputed = [2, 3, 4, 5, 6];
const sums = inputed.reduce((acc, num, index) => {
  console.log(acc, index);
  return acc * num;
});

console.log(sums);

// Define the array of student scores
const scores = [85, 90, 78, 88, 76, 95, 89];

function findHighestScore(scores) {
  return scores.reduce((acc, num) => {
    // if (num > acc) {
    //   return num;
    // } else {
    //   return acc;
    // }
    return num > acc ? num : acc;
  }, 0);
}
console.log(findHighestScore(scores), "value");

let array = [1, 2, 3, 4, 5, 6, 7, 8];
const value = array.reduce((acc, num) => {
  if (num % 2 === 0) {
    return (acc += num);
  } else {
    return acc;
  }
}, 0);

console.log(value);

//*************Filter function **************/
let digits = [4, 10, 2, -3, -2, 5, 9, -1];
let positives = digits.filter(noNegative);
function noNegative(num) {
  return num > 0;
}

console.log(positives);
let negatives = digits.filter((num) => {
  return num < 0;
});
console.log(negatives);

let arrays = [false, null, 0, ""];
let values = arrays.filter(
  (value) => value !== null && value !== 0 && value !== ""
);
console.log(values);

const words = ["apple", "banana", "kiwi", "grape", "watermelon"];
const minLength = 5;

// Function to filter words based on length
function filterLongWords(words, minLength) {
  // Use filter to return words that have a length greater than or equal to minLength
  return words.filter((str) => str.length >= minLength);
}

// Test the function
const result = filterLongWords(words, minLength);
console.log(result); // Output: ["apple", "banana", "grape", "watermelon"]

//**************Find ------ FindIndex ***************/

let find = [22, 13, 15, 77, 65, 98, 76, 44, 55];
let find1 = find.find((num) => num == 65);
console.log(find1);

let find2 = find.findIndex((num) => num === 65);
console.log(find2);

// List of names
const names = ["Alice", "John", "Michael", "Emma", "Sophia", "James"];

// Function 1: Find names
function findNames(names, peopleName) {
  let result = names.find((nam) => nam === peopleName);
  return result ? result : "Name not found";
}

// Function 2: Find index of a name
function updateNamesIndex(names, peopleName) {
  return names.findIndex((index) => index === peopleName);
}
console.log(names);

// Example Usage:
console.log(findNames(names, "John")); // Output: "John"
console.log(findNames(names, "Andrew")); // Output: "Name not found"

console.log(updateNamesIndex(names, "Emma")); // Output: 3
console.log(updateNamesIndex(names, "Mark")); // Output: -1

//**********This keyword************/

console.log(this);

const person = {
  personName: "shivam",
  personAge: 29,

  personsfun: function () {
    console.log(
      `The person's name is ${this.personName} and his age is ${this.personAge}`
    );
  },
};

person.personsfun();

("use strict");

console.log(this);

function checkThis() {
  console.log(this);
}
checkThis();

const checkArrow = () => {
  console.log(this);
};
checkArrow();

