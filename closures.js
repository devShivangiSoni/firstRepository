let a = "Global";

function outerPrint() {
  let b = "OuterPrint";

  return function innerPrint() {
    let c = "innerPrint";
    return `${a} -> ${b} -> ${c}`;
  };
  //  return innerPrint;
}
const show = outerPrint();
console.log(show);
const printInner = show();
console.log(printInner);

// Complete the genrateID function
//Do not alter the starter code

function generateID(ID) {
  //Implement Your function here
  return function func() {
    return `Output : A_2023_${ID++}`;
  };
}

const func = generateID(99);
console.log(func()); //Output : A_2023_99
console.log(func()); // Output: A_2023_100


