const title = document.querySelector("#main-heading");

console.log(title.textContent);

// title.style.color = "red";

const ul = document.querySelector("ul");

const li = document.createElement("li");

li.innerText = "Boom New Movie";
li.classList.add("list-items");

// ul.append(li);

const items = document.querySelectorAll(".list-items");

// console.log(items);

for (i = 0; i < items.length; i++) {
  items[i].style.fontSize = "1.5rem";
}

// DOM traversall

let ul_s = document.querySelector("ul");

// console.log(ul_s.parentNode.parentNode);

// console.log(ul_s.children);
// console.log(ul_s.firstElementChild);
// console.log(ul_s.lastElementChild);

// Event Listeners
const button1 = document.querySelector("button");
const button2 = document.querySelector(".btn-2");
const button3 = document.querySelector(".btn-3");
const newBackground = document.querySelector(".box-3");
const container = document.querySelector(".container");

const sayHello = () => {
  alert("Hello");
};

function changeBcground() {
  newBackground.style.backgroundColor = "black";
}

function changeStyle() {}

button1.addEventListener("click", sayHello);
button2.addEventListener("click", sayHello);
button3.addEventListener("mouseover", changeBcground);

// Reveal stuff

const revealBtn = document.querySelector(".reveal-btn");
const hiddenContent = document.querySelector(".hidden-content");

function revealContent() {
  if (hiddenContent.classList.contains("reveal-btn")) {
    hiddenContent.classList.remove("reveal-btn");
  } else {
    hiddenContent.classList.add("reveal-btn");
  }
}

revealBtn.addEventListener("click", revealContent);

// event delegation

document.querySelector("#Sports").addEventListener("click", function (e) {
  console.log(e.target.innerText);

  const li = e.target;

  if (li.matches("li")) {
    li.style.backgroundColor = "Red";
  }
});

const sports = document.querySelector("#Sports");

const newSport = document.createElement("li");

newSport.innerText = "Hokey";

sports.appendChild(newSport);
