// for (i = 1; i <= 10; i++) {
//   console.log("shivam");
// }

// for (i = 1; i <= 5; i++) {
//   console.log(i);
// }

//Even no

// let a;
// for (a = 1; a <= 20; a++) {
//   console.log(a);
// }
// let i = 2;
// for (; i <= 50; i += 2) {
//   console.log(i);
// }

//Prime no

// let num = 6;
// for (let i = 2; i < num; i++) {
//   if (num % i == 0) {
//     console.log("not prime");
//   } else {
//     console.log("prime");
//   }
// }

// let num = 6;
// let isPrime = true;
// for (i = 2; i < num; i++) {
//   if (num % i == 0) {
//     isPrime = false;
//     break;
//   }
// }

// if (isPrime) {
//   console.log("prime");
// } else {
//   console.log("not prime");
// }

//**While loop */

// let x = 1;
// while (x <= 10) {
//   console.log(x);
//   x++;
// }

//**DO While loop */ this is used at places where we want to exicute the body of the loop even if the condition is false  (also known as EXIT CONTROL LOOP)

// let randomNum = Math.round(Math.random() * 100);
// console.log(randomNum);
// let guessedNum;
// do {
//   guessedNum = prompt("guess the no");
//   if (guessedNum == randomNum) {
//     console.log("guessed correctly");
//   } else {
//     console.log("take another guess");
//   }
// } while (guessedNum != randomNum);

//**Nested loop */

// let Num = 4;
for (let Num = 2; Num <= 10; Num++) {
  for (let z = 1; z <= 10; z++) {
    console.log(`${Num} * ${z} = ${Num * z}`);
  }
  console.log("**********");
}

let Digit = 100;

for (let i = 2; i <= Digit; i++) {
  let isPrime = true;

  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(i);
  }
}
