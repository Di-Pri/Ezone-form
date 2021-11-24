"use strict";

import "./style.scss";

import { loadCards } from "./modules/cards.js";

window.addEventListener("DOMContentLoaded", start);

function start() {
  loadCards();
}

const userSubmited = localStorage.getItem("userSubmited");
console.log(userSubmited);
if (userSubmited) {
  document.querySelector(".get-zone").classList.add("hidden");
  localStorage.removeItem("userSubmited", true);
}
