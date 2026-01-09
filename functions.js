// // function square(number) {
// //   return number * number;
// // }
// // let square5 = square(5);
// // console.log(square5);

// // //**ARRAYS */

// // const historyMarks = [10, 20, 30, 40, 50, 60, 70];
// // console.log(historyMarks);
// // console.log(historyMarks[0]);
// // historyMarks[0] = 20;
// // console.log(historyMarks);

// // const studentDetails = ["name", 2001, "dance"];
// // console.log(studentDetails);

// // const arr = new Array("Riya", "Rahul", "Sonam");
// // console.log(arr);

// // const cities = ["mumbai", "delhi", "culcutta", "jaipur", "chennai"];
// // console.log(cities.length);
// // cities[2] = "kolkata";
// // console.log(cities);

// // //*Adding an element */
// // //Push
// // const teams = ["CSK", "RCB", "MI", "LSG"];
// // teams.push("GI");
// // console.log(teams);
// // const pushArray = teams.push("GI");
// // console.log(pushArray);
// // //Unshift
// // teams.unshift("KKR");
// // console.log(teams);
// // const unshiftArray = teams.unshift("KKR");
// // console.log(unshiftArray);
// // //*Removing an element */
// // //Pop
// // teams.pop();
// // console.log(teams);
// // const popArray = teams.pop();
// // console.log(popArray);

// // //Shift
// // teams.shift();
// // console.log(teams);

// // const shiftArray = teams.shift();
// // console.log(shiftArray);

// // /**Check the element is present or not */
// // //IndexOf()
// // const RCBIndex = teams.indexOf("RCB");
// // console.log(RCBIndex);
// // const GIIndex = teams.indexOf("GI");
// // console.log(GIIndex);

// // //Includes()
// // const rcbIncludes = teams.includes("RCB");
// // console.log(rcbIncludes);
// // const giIncludes = teams.includes("GI");
// // console.log(giIncludes);

// // //Slice()
// // console.log(teams);
// // console.log(teams.slice(2));
// // console.log(teams.slice(-1));
// // console.log(teams);

// // // Splice()
// // teams.splice(2, 1, "GI", "CSS");
// // console.log(teams);

// // //Concat()
// // const teams2 = ["India", "Australia", "New Zeland"];
// // const mergedTeams = teams.concat(teams2);

// // console.log(mergedTeams);

// //** Loop over arrays */
// const Students = ["shiv", "shivam", "shivangi", "soni", "prajapati"];

// // for (i = 0; i < Students.length; i++) {
// //   console.log(`Roll no ${i + 1}: ${Students[i]}`);
// // }

// //For in loop
// for (let i in Students) {
//   console.log(`Roll no ${Number(i) + 1}: ${Students[i]}`);
// }

// //For of loop
// for (let students of Students) {
//   console.log(students);
// }

const aprilBatch = ["tina", "riya"];
const mayBatch = ["ritik", "shiv", "parvati"];
const juneBatch = ["shivam", "shivangi"];
const julyBatch = ["sava", "deepak"];

// function addStudents(batch, students) {
//   batch.push(students);
//   console.log(batch);
// }
// addStudents(aprilBatch, "ritu");
// addStudents(mayBatch, "sunny");

//Rest operator
function addStudents(batch, ...students) {
  for (let i of students) {
    batch.push(i);
  }
  console.log(batch);
}
addStudents(aprilBatch, "sunny", "ritu", "tina", "moti");

//Spread operator
const newBatch = [...mayBatch];
console.log(newBatch);

mayBatch.push("newStudent");
console.log(mayBatch);
console.log(newBatch);

//Concatination in spread

const mergedBatch = [...mayBatch, ...juneBatch];
console.log(mergedBatch);

//**Break Vs Continue */

const inputs = [11, 32, 12, 45, 65, 94, 7, 78, 10, 100, 131, 67, 81, 92, 53];
const evenNumbers = [];

for (let i of inputs) {
  if (i % 2 !== 0) {
    continue;
  }
  evenNumbers.push(i);
  if (evenNumbers.length === 5) break;
  console.log(evenNumbers);
}
console.log(evenNumbers);

//**String Traversal */
// function countChars(str, ch) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str.charAt(i) === ch) {
//       count++;
//     }
//   }
//   console.log(`Occurance of character ${ch} is: ${count}`);
// }
// let str = "JavaScript is an amazing language.";
// let charToFind = " ";

// countChars(str, charToFind);

console.log("------------------------------");

function countWords(str) {
  // console.log(str.length);

  let words = 0;
  let spaces = 0;

  for (i = 0; i < str.length; i++) {
    if (str.charAt(i) === " ") {
      spaces++;
    }
    if (str.charAt(i) === "" && str.charAt(i - 1) !== "") {
      words++;
    }
  }
  if (str.length > 0 && str.charAt(str.length - 1) !== "") {
    words++;
  }
  console.log(`words ${words}`);
  console.log(`spaces ${spaces}`);
}
let str1 = "my name is shivangi";
let str2 = "";
let str3 = "shivangi";
let str4 = "  ";
countWords("shivangi");
// countWords(str2);
// countWords(str3);
// countWords(str4);
console.log(str1.charAt(4));

/**Method in String */
let str = "JavaScript is, a Dynamically, is typed, language.";

//include()
console.log(str.includes("is"));

//Replace()
console.log(str.replace("is", "was"));

//ReplaceAll()
console.log(str.replaceAll("a", "@"));

//Trim()
console.log(str.trim());

//Substring()
console.log(str.substring(4));
console.log(str.substring(0, 9));
console.log(str.substring(-4, 9));

//Slice()
console.log(str.slice(4));
console.log(str.slice(0, 9));
console.log(str.slice(-9));
console.log(str.slice(-9, -3));
//Split()
let words = str.split(",");
console.log(words);
