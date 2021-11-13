export function moveSlides() {
  document.querySelector(".lets-do").addEventListener("click", () => {
    document.querySelector("#ask-user").className = "hidden";
    document.querySelector("form article:nth-of-type(1)").className = "active";
  });

  document.querySelectorAll(".next").forEach((button) => {
    button.addEventListener("click", (e) => {
      let subForm = document.querySelector("article.active input");

      if (subForm.checkValidity()) {
        e.target.parentNode.parentNode.className = "hidden";
        e.target.parentNode.parentNode.nextElementSibling.className = "active";
      } else {
        subForm.reportValidity();
      }
    });
  });

  document.querySelectorAll(".back").forEach((button) => {
    button.addEventListener("click", (e) => {
      e.target.parentNode.parentNode.className = "hidden";
      e.target.parentNode.parentNode.previousElementSibling.className = "active";
    });
  });
}

export function closeForm() {
  document.querySelectorAll(".close-form").forEach((p) => {
    p.addEventListener("click", () => {
      document.querySelector(".modal").classList.remove("hidden");
      document.querySelector(".overlay").classList.add("darken");
    });
  });
  document.querySelector(".modal button").addEventListener("click", () => {
    document.querySelector(".modal").classList.add("hidden");
    document.querySelector(".overlay").classList.remove("darken");
  });
}
