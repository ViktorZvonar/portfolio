import { validateForm } from "./modules/form-validation.js";
import { handleButton } from "./modules/submitForm.js";

window.onload = function () {
  const form = document.querySelector(".form");
  if (form) {
    form.onsubmit = validateForm;
  } else {
    console.log("Form not found.");
  }

  const footerLink = document.getElementById("footerLink");
  if (footerLink) {
    footerLink.addEventListener("click", handleButton);
  } else {
    console.log("Footer link not found.");
  }
};
