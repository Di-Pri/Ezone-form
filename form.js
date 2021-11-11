// import "./sass/style.scss";
"use strict";

import { moveSlides } from "./modules/slides.js";
import { submitForm } from "./modules/submit-form.js";

window.addEventListener("DOMContentLoaded", start);

function start() {
  document.querySelector(".userName").textContent = "";
  moveSlides();
  submitForm();
}

document.querySelector(".lets-do").addEventListener("click", () => {
  document.querySelector("#ask-user").className = "hidden";
  document.querySelector("form article:nth-of-type(1)").className = "active";
});

// function showName(user) {
//   document.querySelector(".userName").textContent = user.name;
// }
