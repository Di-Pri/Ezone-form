"use strict";

import "./style.scss";

import { loadCards } from "./modules/cards.js";

window.addEventListener("DOMContentLoaded", start);

function start() {
  loadCards();
}
