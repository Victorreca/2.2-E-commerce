// Exercise 6
const validate = (event) => {
  let error = 0;
  const onlyLetters = /^[A-Za-z\s]+$/;

  // Get the input fields
  const fName = document.getElementById("fName");
  const fEmail = document.getElementById("fEmail");
  const fAddress = document.getElementById("fAddress");
  const fLastN = document.getElementById("fLastN");
  const fPassword = document.getElementById("fPassword");
  const fPhone = document.getElementById("fPhone");

  // Get the error elements
  const errorName = document.getElementById("errorName");
  const errorEmail = document.getElementById("errorEmail");
  const errorAddress = document.getElementById("errorAddress");
  const errorLastN = document.getElementById("errorLastN");
  const errorPassword = document.getElementById("errorPassword");
  const errorPhone = document.getElementById("errorPhone");

  errorName.textContent = "";
  errorEmail.textContent = "";
  errorAddress.textContent = "";
  errorLastN.textContent = "";
  errorPassword.textContent = "";
  errorPhone.textContent = "";

  // Validate fields entered by the user: name, phone, password, and email
  if (
    fName.value.trim() === "" ||
    fName.value.trim().length < 3 ||
    !onlyLetters.test(fName.value.trim())
  ) {
    fName.classList.add("is-invalid");
    errorName.textContent =
      "This field is required and must have, at least, 3 characters and contain only letters";
    error++;
  } else {
    fName.classList.remove("is-invalid");
  }

  if (fEmail.value.trim() === "" || fEmail.value.trim().length < 3) {
    fEmail.classList.add("is-invalid");
    errorEmail.textContent =
      "This field is required and must contain an '@' and have, at least, 3 characters";
    error++;
  } else {
    fEmail.classList.remove("is-invalid");
  }

  if (fAddress.value.trim() === "" || fAddress.value.trim().length < 3) {
    fAddress.classList.add("is-invalid");
    errorAddress.textContent =
      "This field is required and must have, at least, 3 characters";
    error++;
  } else {
    fAddress.classList.remove("is-invalid");
  }

  if (
    fLastN.value.trim() === "" ||
    fLastN.value.trim().length < 3 ||
    !onlyLetters.test(fLastN.value.trim())
  ) {
    fLastN.classList.add("is-invalid");
    errorLastN.textContent =
      "This field is required and must have, at least, 3 characters and contain only letters";
    error++;
  } else {
    fLastN.classList.remove("is-invalid");
  }

  if (fPassword.value.trim() === "" || fPassword.value.trim().length < 3) {
    fPassword.classList.add("is-invalid");
    errorPassword.textContent = "Enter a correct password";
    error++;
  } else {
    fPassword.classList.remove("is-invalid");
  }

  if (fPhone.value.trim() === "" || fPhone.value.trim().length < 3) {
    fPhone.classList.add("is-invalid");
    errorPhone.textContent =
      "Invalid phone number!! Must be 9 digits with no letters";
    error++;
  } else {
    fPhone.classList.remove("is-invalid");
  }

  if (error > 0) {
    event.preventDefault();
    alert("There are errors in your form.");
  } else {
    alert("The form fields are correct");
  }
};
