//Document Object Model
//let mainElement = document.getElementById("main");
//let mainElement = document.getElementsByClassName("");
//let mainElement = document.getElementsByTagName("div");
//let mainElement = document.querySelector("class");
//let mainElement = document.querySelectorAll("-");

//let mainElement = document.getElementsByTagName("body")[0].parentNode;
//let mainElement = document.getElementsByTagName("body")[0].children;
//let mainElement = document.getElementsByTagName("body")[0].firstChild;
// let mainElement = document.getElementById("h1");
// mainElement.innerText = "Revised Title";

// let current = document.getElementById("1");
// current.innerText = "I am somewhere";
// current.style.color = "purple";


// let myImage = document.getElementById("img");
// if (myImage) {
//     myImage.src = "overide.jpg";  
// } else {
//     console.error("Element with ID 'img' not found.");
// }

let count = 0;

function increment(){
    return count++;
}
let myElement = document.createElement("div");
let myButton = document.createElement("button");
myButton.innerText = "Click Me";  
myElement.appendChild(myButton);
document.body.appendChild(myElement);
//myElement.remove();
myButton.addEventListener("click",() => {
    alert('I am clicked');
});


// myElement.addEventListener('click',increment);
// myElement.innerText = count;

// myElement.addEventListener("mouseover", () => {
//     myElement.style.backgroundColor = "lightcoral";
// });

// myElement.addEventListener("mouseout", () => {
//     myElement.style.backgroundColor = "lightblue";
// });

// setTimeout(() => {
//     getElementbyId("time-out").innerText = "Text Changed!";
// }, 3000);

// let elements = document.getElementsByTagName("*");
// console.log(elements);

// for(i = 0;i < elements.length;i++){
// console.log(elements[i]);
// }

let elements = document.querySelectorAll('*');

elements.forEach((element) => {
    element.style.color = "red"; 
});
