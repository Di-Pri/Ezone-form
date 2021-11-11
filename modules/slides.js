export function moveSlides() {
  document.querySelectorAll(".next").forEach((button) => {
    button.addEventListener("click", (e) => {
      // e.preventDefault();
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
