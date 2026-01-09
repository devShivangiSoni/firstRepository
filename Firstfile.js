console.log("My first javascript file");

let str = "shivangi soni";
let str2 = " shivam";
console.log(str.lastIndexOf("i"));
console.log(str.charAt(0));
console.log(str.charCodeAt(1));
console.log(str.toUpperCase());

let arr = [1, 2, 3, 4, 5];
console.log(arr.length);

const user = {
  name: "shivangi",
  age: 24,
  subject: [
    { id: 1, name: "math" },
    { id: 2, name: "science" },
    {
      id: 3,
      name: "bio",
    },
  ],
};

console.log(user.subject[0].name);

let message = "hello! world!";
let character = message.charAt(15);
console.log(character);

function lowerCaseString(str1, str2) {
  let answer;

  answer = str1.toLowerCase() + str2.toLowerCase();

  return answer;
}

function concatString(str1, str2) {
  let concat;
  concat = str1.concat(str2);

  return concat;
}

function indexOfWorld(str1, str2) {
  let indexOfworld;
  let con = str1.concat(str2);
  indexOfworld = con.indexOf("World");

  return indexOfworld;
}
