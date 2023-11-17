export function preventNonAlphabeticInput(event) {
  if (!event.key.match(/^[A-Za-z]+$/)) {
    swal("Provide only english letters");
    event.preventDefault();
  }
}

export function preventIncorrectNumberInput(event) {
  if (event.target.value.length === 0 && event.key !== "+") {
    swal("The phone number must start with a '+'.");
    event.preventDefault();
    return;
  }

  if (event.target.value.length > 0 && !event.key.match(/^[0-9 ]+$/)) {
    swal("Provide only numbers and spaces.");
    event.preventDefault();
  }
}

export function validateName(name) {
  const regex = /^[A-Za-z]{2,}$/;
  return regex.test(name.trim());
}

export function validatePasswordComplexity(password) {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  return regex.test(password);
}

export function validateInternationalPhoneNumber(phoneNumber) {
  const regex = /^\+\d{1,3} \d{1,3} \d{3,4} \d{3,4}$/;
  return regex.test(phoneNumber);
}

export function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}
