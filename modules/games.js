export function showGames() {
  document.querySelectorAll("[name=games]").forEach((input) => {
    const pic = document.createElement("img");
    pic.src = `./images/${input.id}.svg`;
    pic.alt = input.value;
    input.nextElementSibling.append(pic);

    input.addEventListener("change", (e) => {
      if (e.target.checked) {
        pic.src = `./images/${input.id}_blue.svg`;
      } else {
        pic.src = `./images/${input.id}.svg`;
      }
    });
  });
}
