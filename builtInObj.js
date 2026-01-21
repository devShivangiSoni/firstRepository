const today = new Date();
console.log(today);

const birthDate = new Date("2001-10-11");
console.log(birthDate);
console.log(birthDate.toLocaleDateString("en-IN"));

const date = birthDate.getDate();
const month = birthDate.getMonth() + 1;
const year = birthDate.getFullYear();
console.log(`My Birthdate is: ${date}-${month}-${year}`);


const myBirhtDate = birthDate.getDate();
const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const myBirthMonth = monthNames[birthDate.getMonth()];
const myBirthYear = birthDate.getFullYear();
console.log(`My Birthdate is: ${myBirhtDate}-${myBirthMonth}-${myBirthYear}`);

const birthData = new Date(2001, 9);
console.log(birthData);

console.log(birthData.getFullYear());

console.log(birthData.toDateString());

const birthstr = birthData.toString();
console.log(birthstr.slice(4, 10));
console.log(birthstr.length);

function getSortByMath(diameter) {
  return diameter * Math.SQRT1_2;
}
console.log(getSortByMath(3));
