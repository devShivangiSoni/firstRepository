//***********Shallow copy************//     //*********Shallow copy will only work for the upper layer of the object can't work with obj under obj *********//

const user1 = {
  username: "Shivangi",
  age: 24,
  marks: {
    maths: 20,
    eng: 30,
  },
};

// {const user2 = user1;
// console.log(user2);
// console.log(user1);
// user2.username = "Shivam";
// console.log(user2);
// console.log(user1);}  //This is not the right way to copy the values because if i'll change the value of user2 it will change the user1 value as well.//

// {
//   const user2 = { ...user1 };
//   user2.username = "Shivam";
//   user2.marks.maths = 30;
//   console.log(user2);
//   console.log(user1);
// } //This is the right way to copy the values because if i'll change the value of user2.username it will not change the user1.username value but can't work with the functions of the obj.//

{
  const user2 = Object.assign(user1);
  user2.username = "Shivam";
  user2.marks.maths = 30;
  console.log(user2);
  console.log(user1);
} //This is the right way to copy the values because if i'll change the value of user2.username it will not change the user1.username value but can't work with the functions of the obj.//

//***************Deep copy***************//     //*********Deep copy will work with all the content of the obj---outer obj and (inner obj as well(obj under obj))*********//

const gamer1 = {
  username: "Gamer1",
  age: 24,
  score: {
    level1: 20,
    level2: 30,
  },
  getScore() {
    return this.score;
  },
};
const gamer2 = JSON.parse(JSON.stringify(gamer1));
gamer2.username = "Gamer2";
gamer2.score.level1 = 70;
console.log(gamer1);
console.log(gamer2);
