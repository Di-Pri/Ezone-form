import { post } from "../modules/crud.js";

export function submitForm() {
  const form = document.querySelector("form");
  form.setAttribute("novalidate", true);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (form.checkValidity()) {
      document.querySelector("#last").className = "hidden";
      document.querySelector("#user-name").className = "active";

      const preferences = [];
      document.querySelectorAll("[name=preference]:checked").forEach((pref) => preferences.push(pref.value));

      const games = [];
      document.querySelectorAll("[name=games]:checked").forEach((game) => games.push(game.value));

      const areas = [];
      document.querySelectorAll("[name=areas]:checked").forEach((area) => areas.push(area.value));

      const experience = document.querySelector("[name=experience]:checked");

      const sleep = document.querySelector("[name=sleep]:checked");

      let newsletters = "No";
      const newslettersChecked = document.querySelector("[name=newsletter]:checked");
      if (newslettersChecked) {
        newsletters = newslettersChecked.value;
      }

      const data = {
        name: form.elements.name.value.charAt(0).toUpperCase() + form.elements.name.value.substring(1),
        age: form.elements.age.value,
        experience: experience.value,
        preference: preferences.join(", "),
        games: games.join(", "),
        sleep: sleep.value,
        areas: areas.join(", "),
        email: form.elements.email.value,
        newsletter: newsletters,
        password: form.elements.password.value,
      };

      console.log("Submited data:", data);
      post(data, showName);
      function showName(user) {
        document.querySelector("#user-name span").textContent = user.name;
      }
    } else {
      form.reportValidity();
    }
  });
}
