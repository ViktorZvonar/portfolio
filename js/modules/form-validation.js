const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phone-number");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const passwordError = document.getElementById("passwordError");
const passwordTooltip = document.getElementById("passwordTooltip");
const confirmPasswordError = document.getElementById("confirmPasswordError");

function preventNonAlphabeticInput(event) {
  if (!event.key.match(/^[A-Za-z]+$/)) {
    alert("Provide only english letters");
    event.preventDefault();
  }
}

function preventIncorrectNumberInput(event) {
  if (phoneNumber.value.length === 0 && event.key !== "+") {
    alert("The phone number must start with a '+'.");
    event.preventDefault();
    return;
  }

  if (phoneNumber.value.length > 0 && !event.key.match(/^[0-9 ]+$/)) {
    alert("Provide only numbers and spaces.");
    event.preventDefault();
  }
}

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

function validateName(name) {
  const regex = /^[A-Za-z]{2,}$/;
  return regex.test(name.trim());
}

function validatePasswordComplexity(password) {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  return regex.test(password);
}

function validateInternationalPhoneNumber(phoneNumber) {
  const regex = /^\+\d{1,3} \d{1,3} \d{3,4} \d{3,4}$/;
  return regex.test(phoneNumber);
}

function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
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
    alert("Please enter a valid name: min 2 characters.");
    firstName.classList.add("form__input--error");
    isValid = false;
  } else {
    firstName.classList.remove("form__input--error");
  }

  if (!validateName(lastName.value)) {
    event.preventDefault();
    alert("Please enter a valid name: min 2 characters.");
    lastName.classList.add("form__input--error");
    isValid = false;
  } else {
    lastName.classList.remove("form__input--error");
  }

  if (!validateEmail(email.value)) {
    event.preventDefault();
    alert(
      "Invalid email format. Please use @ and a top-level domain indication (.com et cetera).",
    );
    email.classList.add("form__input--error");
    isValid = false;
  } else {
    email.classList.remove("form__input--error");
  }

  if (!validateInternationalPhoneNumber(phoneNumber.value)) {
    event.preventDefault();
    alert("Invalid phone number format. Please enter in international format.");
    phoneNumber.classList.add("form__input--error");
    isValid = false;
  } else {
    phoneNumber.classList.remove("form__input--error");
  }

  return isValid;
}
