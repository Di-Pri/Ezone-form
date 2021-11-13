// import "./style.scss";
"use strict";

import { moveSlides } from "./modules/slides.js";
import { submitForm } from "./modules/submit-form.js";
import { showGames } from "./modules/games.js";

window.addEventListener("DOMContentLoaded", start);

function start() {
  moveSlides();
  showGames();
  submitForm();
}
