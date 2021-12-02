"use strict";

import { moveSlides, closeForm } from "./modules/slides.js";
import { showGameTypes, showGames, showAreas } from "./modules/checkbox-icons";
import { submitForm } from "./modules/submit-form.js";

window.addEventListener("DOMContentLoaded", start);

function start() {
  moveSlides();
  closeForm();
  showGameTypes();
  showGames();
  showAreas();
  submitForm();
}
