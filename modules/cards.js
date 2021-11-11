export async function loadCards() {
  const response = await fetch("./cards.json");
  const cardData = await response.json();
  cardData.forEach(showCards);
}

function showCards(card) {
  const clone = document.querySelector("#childCard").content.cloneNode(true);

  const thumbnail = document.createElement("img");
  thumbnail.src = card.image;
  thumbnail.alt = "Thumbnail of the article";
  clone.querySelector(".cardContent div").append(thumbnail);
  clone.querySelector(".cardContent h3").textContent = card.type;
  clone.querySelector(".cardContent h1").textContent = card.heading;
  clone.querySelector(".cardContent h4").textContent = card.field;

  document.querySelector(".parentCard").appendChild(clone);
}
