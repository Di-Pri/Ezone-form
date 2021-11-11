import "./style.scss";

//import { post } from "./modules/crud.js";
import { loadCards } from "./modules/cards.js";

("use strict");

window.addEventListener("DOMContentLoaded", start);

function start() {
  loadCards();
}
