const student = {
  name: "shivangi",
  age: 10,
  hobby: "dance",
  10: "ten",
  show: function () {
    console.log("this is the students details");
  },
  Marks: {
    sub1: {
      name: "biology",
      marks: 89,
    },
    sub2: {
      name: "chemistry",
      marks: 90,
    },
  },
};
student.class = 12;

console.log(student);
console.log(student.name);
console.log(student["name"]);
console.log(student[10]);
student.show();
console.log(student["Marks"]["sub2"]["marks"]);

function Composite(number) {
  let answer; // This variable will store the result (true or false)

  // Initialize a variable to count the number of factors
  let count = 0;
  // Loop through all integers from 1 up to 'number'.
  for (let i = 1; i < number; i++) {
    if (number % i === 0) {
      count++;
    }
    if (count > 2) {
      answer = true;
    } else {
      answer = false;
    }
  }
  console.log(answer);

  // Increment the count for each integer that is a divisor of 'number'.

  // After the loop, check if the count of factors is more than 2

  // Return the result
  return answer;
}
console.log(Composite(20));

function compoundInterest(principalAmount, annualInterestRate, numberOfYears) {
  let answer;

  // Initialize the answer variable with the principal amount
  answer = principalAmount;

  // create and initialize a year counter to 1
  years = 1;
  // Use a while loop to calculate the total amount over the specified number of years
  while (years <= numberOfYears) {
    answer = answer + answer * annualInterestRate;
    years++;
  }

  // Return the final amount after all years
  return answer;
}
console.log(compoundInterest(100, 0.05, 3));

function checkPrime(num) {
  let count = 0;
  let sum = 0;
  for (i = 2; i <= num; i++) {
    let isPrime = true;
    for (j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      sum = sum + i;
    }
  }
  console.log("sum is ", sum);
  if (count < 2) {
    return true;
  } else {
    return false;
  }
}

console.log("check prime", checkPrime(10));

// Write the program to calculate the discount on the given amount
// store the calculated discount in the "discount" variable
// Please do not alter anything given in the starter code
function calculate(amount) {
  let discount;

  // write your code here
  switch (true) {
    case amount < 500:
      discount = "No Discount";
      break;
    case amount >= 500 && amount < 1000:
      discount = "10% Discount";
      break;
    case amount >= 1000 && amount < 2000:
      discount = "20% Discount";
      break;
    case amount >= 2000 && amount < 4000:
      discount = "30% Discount";
      break;
    case amount >= 4000 && amount < 5000:
      discount = "40% Discount";
      break;
    case amount >= 5000:
      discount = "50% Discount";
      break;
    default:
      discount = "Invalid Input.";
  }
  return discount;
}
console.log(calculate(500));

function main(tempF) {
  let result;

  // Step 1: Convert the temperature from Fahrenheit to Celsius.
  let tempC = ((tempF - 32) * 5) / 9;
  // Step 2: Store the converted temperature in a new variable.

  // Step 3: Check if the rounded temperature is 37?C or higher with the help of if and else condition
  if (tempC >= 37)
    result = `"You have a fever! Your temperature is" ${tempC.toFixed(1)} `;
  else {
    result = `"No fever! Your temperature is" ${tempC.toFixed(1)} `;
  }
  // Use the toFixed() method to format converted temperature in celcius to one decimal place.

  return result;
}
console.log(main(98.6));

function sumOfFactorial(num) {
  let answer = 0;

  for (let i = 1; i < num; i++) {
    if (num % i === 0) answer = answer + i;
  }
  return answer;
}
// console.log(sumOfFactorial(6));

function lastDigit(num1, num2) {
  let answer;

  answer = num1 % 10 === num2 % 10;

  return answer;
}

console.log(lastDigit(9, 19));
console.log(lastDigit(2, 24));

function commonDigits(num1, num2) {
  let answer;

  a = String(num1);
  b = String(num2);

  answer = a.length === b.length;

  return answer;
}
console.log(commonDigits(78574, 78392));

const teams = ["CSK", "RCB", "MI", "LSG"];
teams.push("GI");
console.log(teams);
const pushArray = teams.push("GI");
console.log(pushArray);

function addExpense(newExpense, originalExpenseArray) {
  originalExpenseArray.push(newExpense);
  return originalExpenseArray;
}
console.log(addExpense(543, [340, 567, 434, 653]));

const rcbIncludes = teams.includes("RCB");
console.log(rcbIncludes);
const giIncludes = teams.includes("GI");
console.log(giIncludes);

arrayLength = 10;

for (let i = 0; i < arrayLength; i++) {
  console.log(`now value of i is  ${i}`);
  console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");

  if (i === 1) {
    console.log("found one");
  } else {
    console.log("checked One");
  }
  console.log("=============================");

  if (i === 2) {
    console.log("found two");
  } else {
    console.log("checked two");
  }
  console.log("=============================");

  if (i === 3) {
    console.log("found three");
  } else {
    console.log("checked three");
  }
  console.log("=============================");

  if (i === 4) {
    console.log("found four");
  } else {
    console.log("checked four");
  }
  console.log("=============================");

  for (let j = i + 1; j < arrayLength; j++) {
    console.log(`now value of j is  ${j} and i is ${i}`);
    console.log(
      "-----------------------------------------------------------------------------------------------"
    );

    if (j === 5) {
      console.log(" ****** shivagi ******");
    }
  }
}

// Complete the findDuplicate function
// Do not alter the starter code.

// let arr = [4, 2, 34, 4, 1, 12, 1, 4];
// function findDuplicate(arr) {
//   //Implement your function here
//   console.log(arr.length);
//   let duplicate = [];
//   for (i = 0; i < arr.length; i++) {
//     for (j = i + 1; j < arr.length; j++) {
//       if (arr[j] === arr[i] && duplicate.indexOf(arr[i]) === -1) {
//         duplicate.push(arr[i]);
//         break;
//       }
//     }
//   }
//   return duplicate;
// }
// console.log(findDuplicate(arr));
// console.log(arr.indexOf(arr[4]));

// arr1 = [1, 2, 4, 5, 7];
// arr2 = [1, 2, 4, 5, 7];

// function mergeArray(arr1, arr2) {
//   let mergedArray = [...arr1, ...arr2];
//   let result = [];

//   for (i = 0; i < mergedArray.length; i++) {
//     if (result.indexOf(mergedArray[i]) === -1) {
//       result.push(mergedArray[i]);
//     }
//   }

//   return result;
// }

// console.log(mergeArray([1, 2, 4, 5, 7], [1, 2, 4, 5, 7]));

// function sumOfArray(arr) {
//   let sum = 0;
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] % 5 === 0) {
//     }
//   }
//   return sum;
// }
// console.log(sumOfArray([1, 6, 8, 3, 5, 20, 10]));

// function countWords(str) {
//   let count = 0;
//   for (i = 0; i < str.length; i++) {
//     if (str.charAt(i) === " " && str.charAt(i - 1) !== " ") {
//       count++;
//     }
//   }
//   console.log("space", count);
//   return count;
// }
// console.log(countWords("i am a Ninja Coder      "));

// let arr = [1, 2, 3, 4, 5];

// console.log(arr.at(1));

// function findTheNumber(arr, ele) {
//   let answer = -1;

//   for (index = 0; index < arr.length; index++) {
//     if (arr[index] === ele) {
//       answer = index;
//     }
//   }

//   return answer;
// }
// console.log(findTheNumber([23, 43, 67, 89, 62, 29], 67));

// function reverseString(str) {
//   let reversed = "";

//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed = reversed + str.charAt(i);
//   }
//   return reversed;
// }
// console.log(reverseString("shivangi")); // ignavihs

// //complete the calculatePrice function
// //Do not alter the starter code
// const goods = {
//   apple: { price: 150, quantity: 2 },
//   banana: { price: 75, quantity: 3 },
//   orange: { price: 125, quantity: 1 },
// };
// function calculatePrice(goods) {
//   let totalPrice = 0;
//   for (let item in goods) {
//     const { price, quantity } = goods[item];
//     totalPrice = totalPrice + price * quantity;
//   }
//   return totalPrice;
// }
// console.log(calculatePrice(goods));
// //output : 650
