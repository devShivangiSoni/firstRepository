// Do not alter the starter code

const orders = [
  {
    orderNumber: 1,
    items: [
      { name: "Cappuccino", price: 3.5 },
      { name: "Chocolate Croissant", price: 2.5 },
    ],
  },
  {
    orderNumber: 2,
    items: [
      { name: "Latte", price: 4.0 },
      { name: "Blueberry Muffin", price: 2.75 },
    ],
    discountCode: "COFFEELOVER",
  },
];

function totalOrderValue(orders, applyDiscount) {
  let sum = 0;
  orders.map((order) => {
    console.log(order);

    let singleOrderTotal = order.items.reduce((acc, item) => {
      console.log("acc: ", acc);
      console.log("item: ", item);
      console.log(acc.price + item.price);
      return acc.price + item.price;
    });
    console.log(singleOrderTotal);
    if (order.discountCode) {
      let result = applyDiscount(order.discountCode, singleOrderTotal);
      console.log("result: ", result);
      sum += result;
    } else {
      sum += singleOrderTotal;
    }
  });
  return sum.toFixed(2);
}

const applyDiscount = (discountCode, total) => {
  if (discountCode === "COFFEELOVER") {
    return total - total * 0.1;
  } else if (discountCode === "TEALOVER") {
    return total - total * 0.2;
  }
};
let funreturn = totalOrderValue(orders, applyDiscount);
console.log("funreturn: ", funreturn);

// function main() {
//   //Refactor the gadget constructor function
//   const Gadget = (brand, type) => {
//     this.brand = brand;
//     this.type = type;

//     // Refactor the describeGadget() method here
//     this.describeGadget = () => {
//       return `This gadget is a ${type} from ${brand}.`;
//     };
//   };
//   const gadget1 = new Gadget("sony", "laptop");
//   console.log(gadget1.describeGadget());
//   // Do not modify the return statement
//   return Gadget;
// }
// main();

// function Gadget(brandName, deviceType, itemPrice) {
//   console.log(this);
//   this.brand = brandName;
//   this.type = deviceType;
//   this.mrp = itemPrice;
//   this.getDetails = () => {
//     return `this is a ${deviceType} from ${this.brand}`;
//   };
//   this.getPrice = () => {
//     console.log(`this ${deviceType} is of Rs ${itemPrice}`);
//   };
// }

// const fjadlkfh = new Gadget("Sony", "Camera", 500);
// console.log(fjadlkfh.getDetails());
// fjadlkfh.getPrice();

function Beta(betaName, papaName, maName, familyMember) {
  console.log(this);
  this.fatherName = papaName;
  this.motherName = maName;
  this.totalMemberInFamily = familyMember;

  this.btaoParentDetails = () => {
    console.log(`my father name is ${papaName} and mother name is ${maName}`);
  };

  this.btaofamilyMebers = () => {
    console.log(
      familyMember
        ? `We have total member ${familyMember} in family`
        : `${betaName} says :I don't know`
    );
  };
}

const shivangiBeta = new Beta("shivangi", "Ramsawroop", "Sudha");
const shivamBeta = new Beta("shivam", "Rambriksh", "Leelawati");
shivangiBeta.btaoParentDetails();

shivamBeta.btaoParentDetails();

shivangiBeta.btaofamilyMebers();

const student = {
  studentName: "shviam",
  age: 29,
  getDetails: function () {
    console.log(`I am ${studentName}`);
  },
  getAge: function () {
    console.log(`i am ${this}`);
  },
};

const student2 = {
  studentName: "shivangi",
  age: 24,
  getDetails: function () {
    console.log(`I am ${studentName}`);
  },
  getAge: function () {
    console.log(`i am ${this}`);
  },
};

function Students(
  studentName,
  studentAge,
  studentFahter,
  studentMohter,
  studentAddress
) {
  this.name = studentName;

  this.getName = function () {
    console.log(`student name is ${this.name} and age is ${studentAge}`);
  };
  this.getParentDetails = function () {
    console.log(
      `parent of ${studentName} is ${studentFahter} and ${studentMohter}`
    );
  };
}

const student3 = new Students(
  "shivam",
  29,
  "Rambriksh",
  "leelawati",
  "gurugram"
);

const student4 = new Students("shivangi", 24);
student4.getName();
student3.getName();
student3.getParentDetails();

function Class(name) {
  this.name = name;
}

Class.prototype.getName = function () {
  console.log(this.name);
};
Class.prototype.year = 2018;

const class1 = new Class("B.Pharma");
console.log(class1);

class1.getName();
console.log(class1);

class1.year;
console.log(class1.year);

function main() {
  // Example usage:
  const userProfile1 = {
    name: "John Doe",
    email: "john.doe@example.com",
    city: "New York",
    street: "123 Main St",
    zipCode: "10001",
  };

  const userProfile2 = {
    name: "Marry Jane",
    email: "marry.jane@example.com",
    city: "L.A",
    street: "154 Washington Road",
    zipCode: "10011",
  };

  function getUserInfo(profile, key) {
    // Check if the key exists in the object
    // write your code here
    if (profile && key in profile) {
      return profile[key];
    } else {
      return "Not available";
    }
  }

  console.log(getUserInfo(userProfile1, "name")); // Output: "John Doe"
  console.log(getUserInfo(userProfile2, "city")); // Output: "L.A"
  console.log(getUserInfo(userProfile1, "phoneNumber")); // Output: "Not available"

  return getUserInfo();
}

main();
