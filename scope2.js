var a = 1;

console.log(`a: ${a}`);

function outer() {
  let x = 10;
  if (true) {
    let y = 20;
    var z = 30;
    console.log(x + y + z);
  }
  console.log(x + y + z);
}
outer();
