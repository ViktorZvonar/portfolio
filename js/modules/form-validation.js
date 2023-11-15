const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const phoneNumber = document.getElementById("phone-number");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");

function preventNonAlphabeticInput(event) {
  if (!event.key.match(/^[A-Za-z]+$/)) {
    alert("Provide only letters");
    event.preventDefault();
  }
}

function passwordAlert() {
  alert(
    "Password must contain 8 characters, 1 uppercase letter, 1 lowercase letter, 1 number.",
  );
  password.removeEventListener("focus", passwordAlert);
}

firstName.addEventListener("keypress", preventNonAlphabeticInput);
lastName.addEventListener("keypress", preventNonAlphabeticInput);
password.addEventListener("focus", passwordAlert);

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
  const regex = /^[A-Za-z]+$/;
  const isValidName = regex.test(name.trim());
  console.log(`Validating name: ${name}, Result: ${isValidName}`);
  return isValidName;
}

function validatePasswordComplexity(password) {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  return regex.test(password);
}

function validateInternationalPhoneNumber(phoneNumber) {
  const regex = /^\+\d{1,3} \d{1,3} \d{3,4} \d{3,4}$/;
  return regex.test(phoneNumber);
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
  }

  if (!validateName(firstName.value) || !validateName(lastName.value)) {
    event.preventDefault();
    alert("Please enter a valid name.");
    isValid = false;
  }

  if (!validateInternationalPhoneNumber(phoneNumber.value)) {
    event.preventDefault();
    alert("Invalid phone number format. Please enter in international format.");
    isValid = false;
  }

  return isValid;
}
