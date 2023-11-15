const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const passwordError = document.getElementById("passwordError");

function checkPasswords() {
  if (password.value !== confirmPassword.value) {
    passwordError.innerText = "Passwords do not match.";
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
  return name.trim() !== "";
}

function validatePasswordComplexity(password) {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  return regex.test(password);
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
    alert(
      "Password must contain 8 characters, 1 uppercase letter, 1 lowercase letter, 1 number.",
    );
    passwordError.style.display = "block";
    password.classList.add("form__input--error");
    isValid = false;
  }

  if (!validateName(firstName.value) || !validateName(lastName.value)) {
    event.preventDefault();
    alert("Please enter a valid name.");
    isValid = false;
  }

  return isValid;
}
