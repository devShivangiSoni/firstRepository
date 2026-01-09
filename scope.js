/**SCOPE IN JS  */

//Global

//Block

// var varNum = 10;
// let letnum = 20;
// const constNum = 30;
// console.log(varNum, letnum, constNum);

// //Funtion(Local)
// function print() {
//   var varLocal = 11;
//   let letLocal = 21;
//   const constLocal = 31;

//   console.log(varLocal, constLocal, letLocal);
//   console.log(varNum, letnum, constNum);
//   var varNum = 50;
// }

// print();
// console.log(varLocal, constLocal, letLocal);

// var a = 10;
// let b = 20;
// const c = 30;

// function print() {
//   var a = "ten";
//   let b = "twenty";

//   console.log("===== Inside print Funtion =====");
//   console.log(a, b, c);
//   console.log("===== =====");

//   function innerPrint() {
//     var a = "inner10";
//     console.log("*Inside innerPirnt Function*");
//     console.log(a, b, c);
//   }
//   innerPrint();
// }
// console.log(a, b, c);
// print();

var a = 1;
let b = 20;
console.log(`a: ${a}, b: ${b} `);

var a = 55;
console.log(`a: ${a}`);
