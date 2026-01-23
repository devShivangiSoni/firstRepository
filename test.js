console.log(
  "=======================================================================================================",
);
// your code start

function Character(health, strength, agility) {
  this.health = health;
  this.strength = strength;
  this.agility = agility;
}
let character1 = new Character(100, 50, 30);
console.log(character1);

function Warrior(health, strength, agility, weaponType) {
  Character.call(this,health, strength, agility);
  console.log("this: ", this);
  this.weaponType = weaponType;
}
let warrior1 = new Warrior(100, 80, 40, "sword");
console.log("warrior1: ", warrior1);
// your code end
console.log(
  "=======================================================================================================",
);
