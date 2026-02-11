// const btn = document.createElement("button");
// btn.textContent = "click me";
// btn.className = "btn1";

// const division = document.querySelector("div");
// division.appendChild(btn);

// const newDiv = document.createElement("div");
// newDiv.textContent = "Hello";
// newDiv.className = "div1";

// document.body.appendChild(newDiv);

// const newPara = document.createElement("p");
// newPara.textContent = "I'm learning DOM manupulation";
// newPara.className = "p1";

// newDiv.appendChild(newPara);

// //******************************* .InnerHTML *******************************/
// //1.Gets or sets the HTML content inside an element
// // 2.Interprets HTML tags

// document.getElementById("box").innerHTML = "<p>Hello <b>World</b></p>";

// //******************************* .textContent *******************************/
// //1.Gets or sets only text
// //2.Treats HTML tags as plain text

// const element = document.getElementById("myElement");
// var textContent = element.textContent;
// console.log("Initial text content :", textContent);

// element.textContent = "New text content";

// var updatedTextContent = element.textContent;
// console.log("updatedTextContent :", updatedTextContent);

// // document.getElementById("box").textContent = "Hello World!";

// const newLine = document.createElement("div");
// newLine.textContent = "Newcode in starting from here...";
// newLine.className = "new-line";

// body.append(newLine);

// const p = document.querySelector("p");
// p.addEventListener("click", click);

// function click(){
//     console.log("para clicked")
// }  // if the function is not having any perameter we can use the event listener in this way

const p = document.querySelector("p");
p.addEventListener("click", function () {
  click("Hello ");
});

function click(name) {
  console.log(name + "para clicked");
} // this is the way if the funtion is having any perameter you can use event listener in this way(callback funtion)


