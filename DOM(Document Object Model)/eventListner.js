const p = document.querySelector("h2");
p.addEventListener("mousedown", function () {
  p.style.backgroundColor = "red";
});
p.addEventListener("mouseup", function () {
  p.style.backgroundColor = "";
});

document.addEventListener("keydown", (event) => {
  console.log("event: ", event);
  console.log("keyPressed");
  console.log(event.keyCode);
});

const myElement = document.querySelector("#myElement")
console.log('myElement: ', myElement);

// myElement.containsClass("highlight")
// myElement.hasClassName("highlight")
myElement.classList.contains("highlight")
// myElement.checkClass("highlight")
