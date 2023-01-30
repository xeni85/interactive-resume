// grab the body element from the DOM
let body = document.querySelector("body");

//create a main div for our elements
let main = document.createElement("main");

let expanded0 = false;
let expanded1 = false;
let expanded2 = false;
let expanded3 = false;
let expanded4 = false;
let expanded5 = false;

//for loop creating all the containers
for (let i = 0; i < 6; i++) {
  let container = document.createElement("div");
  container.setAttribute("class", "div-" + i);

  let titleContainer = document.createElement("div");
  titleContainer.setAttribute("class", "title-container-" + i);

  let innerContainer = document.createElement("div");
  innerContainer.setAttribute("class", "inner-div-" + i);

  let innerButtonContainer = document.createElement("div");
  innerButtonContainer.setAttribute("class", "inner-button-div-" + i);

  let button = document.createElement("button");
  button.setAttribute("id", "btn-" + i);
  button.style.cssText = "width: 100%;";
  let img = document.createElement("img");
  img.setAttribute("src", "/images/icons8-down-arrow-64.png");
  img.setAttribute("id", "img-" + i);

  button.appendChild(img);
  innerButtonContainer.appendChild(button);
  container.appendChild(titleContainer);
  container.appendChild(innerContainer);
  container.appendChild(innerButtonContainer);
  main.appendChild(container);
}

body.appendChild(main);

let buttons = document.querySelectorAll("button");
console.log(buttons);

//Titles
let titleContainer0 = document.querySelector(".title-container-0");
titleContainer0.innerHTML = "Summary";
titleContainer0.style.cssText =
  "display: flex; justify-content: center; align-content: center; font-weight: bolder; font-size: 6vh; color: #FF6103";
let titleContainer1 = document.querySelector(".title-container-1");
titleContainer1.innerHTML = "Education";
titleContainer1.style.cssText =
  "display: flex; justify-content: center; align-content: center; font-weight: bolder; font-size: 6vh; color: #FF6103";
let titleContainer2 = document.querySelector(".title-container-2");
titleContainer2.innerHTML = "Employment";
titleContainer2.style.cssText =
  "display: flex; justify-content: center; align-content: center; font-weight: bolder; font-size: 6vh; color: #FF6103";
let titleContainer3 = document.querySelector(".title-container-3");
titleContainer3.innerHTML = "Skills";
titleContainer3.style.cssText =
  "display: flex; justify-content: center; align-content: center; font-weight: bolder; font-size: 6vh; color: #FF6103";
let titleContainer4 = document.querySelector(".title-container-4");
titleContainer4.innerHTML = "Languages";
titleContainer4.style.cssText =
  "display: flex; justify-content: center; align-content: center; font-weight: bolder; font-size: 6vh; color: #FF6103";
let titleContainer5 = document.querySelector(".title-container-5");
titleContainer5.innerHTML = "Awards";
titleContainer5.style.cssText =
  "display: flex; justify-content: center; align-content: center; font-weight: bolder; font-size: 6vh; color: #FF6103";

//All the juice
let expandInnerDiv0 = () => {
  let innerContainer = document.querySelector(".inner-div-0");
  let img = document.querySelector("#img-0");
  if (expanded0 === false) {
    innerContainer.style.cssText =
      "width: 100%; height: 200px; background-color: red;";
    img.setAttribute("src", "/images/icons8-up-arrows-64.png");
    expanded0 = true;
  } else {
    innerContainer.style.cssText = "none";
    img.setAttribute("src", "/images/icons8-down-arrow-64.png");
    expanded0 = false;
  }
};

let expandInnerDiv1 = () => {
  let innerContainer = document.querySelector(".inner-div-1");
  let img = document.querySelector("#img-1");
  if (expanded1 === false) {
    innerContainer.style.cssText =
      "width: 100%; height: 200px; background-color: red;";
    img.setAttribute("src", "/images/icons8-up-arrows-64.png");
    expanded1 = true;
  } else {
    innerContainer.style.cssText = "none";
    img.setAttribute("src", "/images/icons8-down-arrow-64.png");
    expanded1 = false;
  }
};

let expandInnerDiv2 = () => {
  let innerContainer = document.querySelector(".inner-div-2");
  let img = document.querySelector("#img-2");
  if (expanded2 === false) {
    innerContainer.style.cssText =
      "width: 100%; height: 200px; background-color: red;";
    img.setAttribute("src", "/images/icons8-up-arrows-64.png");
    expanded2 = true;
  } else {
    innerContainer.style.cssText = "none";
    img.setAttribute("src", "/images/icons8-down-arrow-64.png");
    expanded2 = false;
  }
};

let expandInnerDiv3 = () => {
  let innerContainer = document.querySelector(".inner-div-3");
  let img = document.querySelector("#img-3");
  if (expanded3 === false) {
    innerContainer.style.cssText =
      "width: 100%; height: 200px; background-color: red;";
    img.setAttribute("src", "/images/icons8-up-arrows-64.png");
    expanded3 = true;
  } else {
    innerContainer.style.cssText = "none";
    img.setAttribute("src", "/images/icons8-down-arrow-64.png");
    expanded3 = false;
  }
};

let expandInnerDiv4 = () => {
  let innerContainer = document.querySelector(".inner-div-4");
  let img = document.querySelector("#img-4");
  if (expanded4 === false) {
    innerContainer.style.cssText =
      "width: 100%; height: 200px; background-color: red;";
    img.setAttribute("src", "/images/icons8-up-arrows-64.png");
    expanded4 = true;
  } else {
    innerContainer.style.cssText = "none";
    img.setAttribute("src", "/images/icons8-down-arrow-64.png");
    expanded4 = false;
  }
};

let expandInnerDiv5 = () => {
  let innerContainer = document.querySelector(".inner-div-5");
  let img = document.querySelector("#img-5");
  if (expanded5 === false) {
    innerContainer.style.cssText =
      "width: 100%; height: 200px; background-color: red;";
    img.setAttribute("src", "/images/icons8-up-arrows-64.png");
    expanded5 = true;
  } else {
    innerContainer.style.cssText = "none";
    img.setAttribute("src", "/images/icons8-down-arrow-64.png");
    expanded5 = false;
  }
};

let buttonsArr = Array.from(buttons);

let expandDiv = (el) => {
  let targetID = el.target.id;
  if (targetID === "btn-0" || targetID === "img-0") {
    expandInnerDiv0();
  } else if (targetID === "btn-1" || targetID === "img-1") {
    expandInnerDiv1();
  } else if (targetID === "btn-2" || targetID === "img-2") {
    expandInnerDiv2();
  } else if (targetID === "btn-3" || targetID === "img-3") {
    expandInnerDiv3();
  } else if (targetID === "btn-4" || targetID === "img-4") {
    expandInnerDiv4();
  } else if (targetID === "btn-5" || targetID === "img-5") {
    expandInnerDiv5();
  }
  console.log(el.target.id);
};
buttonsArr.forEach((el) =>
  el.addEventListener("click", (event) => expandDiv(event))
);
