import { get, post } from "../modules/crud.js";

export function submitForm() {
  const form = document.querySelector("form");
  form.setAttribute("novalidate", true);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (form.checkValidity()) {
      document.querySelector("#last").className = "hidden";
      document.querySelector("#user-name").className = "active";

      //  const experiences = [];
      //  const experiencesChecked = document.querySelectorAll("[name=experience]:checked");
      //  experiencesChecked.forEach((el) => experiences.push(el.value));

      const experience = document.querySelector("[name=experience]:checked");

      let newsletters = "No";
      const newslettersChecked = document.querySelector("[name=newsletter]:checked");
      if (newslettersChecked) {
        newsletters = newslettersChecked.value;
      }

      const data = {
        name: form.elements.name.value,
        age: form.elements.age.value,
        experience: experience.value,
        email: form.elements.email.value,
        newsletter: newsletters,
        password: form.elements.password.value,
      };
      console.log(data);
      post(data, showName);
      get(showName);
      function showName(user) {
        document.querySelector("#user-name span").textContent = user.name;
      }
      //post(data);
    } else {
      form.reportValidity();
    }
  });
}
