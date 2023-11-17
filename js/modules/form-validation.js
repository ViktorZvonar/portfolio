import {
  preventNonAlphabeticInput,
  preventIncorrectNumberInput,
  validateName,
  validatePasswordComplexity,
  validateInternationalPhoneNumber,
  validateEmail,
} from "./validationHelpers.js";

const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phone-number");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const passwordError = document.getElementById("passwordError");
const passwordTooltip = document.getElementById("passwordTooltip");
const confirmPasswordError = document.getElementById("confirmPasswordError");

password.addEventListener("focus", () => {
  passwordTooltip.style.display = "block";
});

password.addEventListener("blur", () => {
  passwordTooltip.style.display = "none";
});

firstName.addEventListener("keypress", preventNonAlphabeticInput);
lastName.addEventListener("keypress", preventNonAlphabeticInput);
phoneNumber.addEventListener("keypress", preventIncorrectNumberInput);

function checkPasswords() {
  if (password.value !== confirmPassword.value) {
    confirmPasswordError.innerText = "Passwords do not match.";
    passwordError.style.display = "block";
    password.classList.add("form__input--error");
    confirmPassword.classList.add("form__input--error");
    return false;
  } else {
    passwordError.style.display = "none";
    password.classList.remove("form__input--error");
    confirmPassword.classList.remove("form__input--error");
  }
  return true;
}

export function validateForm(event) {
  let isValid = true;

  if (!checkPasswords()) {
    event.preventDefault();
    isValid = false;
  }

  if (!validatePasswordComplexity(password.value)) {
    event.preventDefault();
    passwordError.innerText = "Provide complex password";
    passwordAlert();
    passwordError.style.display = "block";
    password.classList.add("form__input--error");
    isValid = false;
  } else {
    password.classList.remove("form__input--error");
  }

  if (!validateName(firstName.value)) {
    event.preventDefault();
    swal("Please provide valid name: min 2 letters.");
    firstName.classList.add("form__input--error");
    isValid = false;
  } else {
    firstName.classList.remove("form__input--error");
  }

  if (!validateName(lastName.value)) {
    event.preventDefault();
    swal("Please provide valid name: min 2 letters.");
    lastName.classList.add("form__input--error");
    isValid = false;
  } else {
    lastName.classList.remove("form__input--error");
  }

  if (!validateEmail(email.value)) {
    event.preventDefault();
    swal(
      "Invalid email format. Please use @ and a top-level domain indication (.com et cetera).",
    );
    email.classList.add("form__input--error");
    isValid = false;
  } else {
    email.classList.remove("form__input--error");
  }

  if (!validateInternationalPhoneNumber(phoneNumber.value)) {
    event.preventDefault();
    swal("Invalid phone number format. Please enter in international format.");
    phoneNumber.classList.add("form__input--error");
    isValid = false;
  } else {
    phoneNumber.classList.remove("form__input--error");
  }

  return isValid;
}
