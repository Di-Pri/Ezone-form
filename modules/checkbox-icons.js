export function displayFormIcons() {
  showGameTypes();
  showGames();
  showAreas();
}

function showGameTypes() {
  document.querySelectorAll("[name=preference]").forEach((input) => {
    showImages(input);
  });
}

function showGames() {
  document.querySelectorAll("[name=games]").forEach((input) => {
    showImages(input);
  });
}

function showAreas() {
  document.querySelectorAll("[name=areas]").forEach((input) => {
    showImages(input);
  });
}

function showImages(input) {
  const pic = document.createElement("img");
  pic.src = `./icons/${input.id}.svg`;
  pic.alt = input.value;
  input.nextElementSibling.append(pic);

  input.addEventListener("change", (e) => {
    if (e.target.checked) {
      pic.src = `./icons/${input.id}_blue.svg`;
      e.target.nextElementSibling.style.color = "#633cff";
    } else {
      pic.src = `./icons/${input.id}.svg`;
      e.target.nextElementSibling.style.color = "#ffffff";
    }
  });
}
