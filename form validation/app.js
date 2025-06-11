const form = document.getElementById("form");
const username = document.getElementById("name");
const eamil = document.getElementById("email");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");
const submit = document.getElementById("btn");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
});

// check valid input function
const validateInputs = () => {
  const uservalue = username.value.trim();
  const emailvalue = eamil.value.trim();
  const passwordvalue = password.value.trim();
  const cpasswordvalue = cpassword.value.trim();

  // check username
  if (uservalue === "") {
    setError(username, "username is required!");
  } else {
    setSuccess(username);
  }

  // check email

  if (emailvalue === "") {
    setError(eamil, "email is required!");
  } else {
    setSuccess(eamil);
  }

  // check password

  if (passwordvalue === "") {
    setError(password, "password is required!");
  } else if (passwordvalue.length < 8) {
    setError(password, "password lenght must be 8");
  } else {
    setSuccess(password);
  }

  // check cpassword
  if (cpasswordvalue === "") {
    setError(cpassword, "password not match");
  } else if (cpasswordvalue !== passwordvalue) {
    setError(password, "password not match");
  } else {
    setSuccess(cpassword);
  }
};

// error function
const setError = (element, message) => {
  const inputcontrol = element.parentElement;
  const errorDisplay = inputcontrol.querySelector(".error");
  errorDisplay.innerText = message;

  inputcontrol.classList.add("error");
  inputcontrol.classList.remove("success");
};

// success function
const setSuccess = (element) => {
  const inputcontrol = element.parentElement;
  const errorDisplay = inputcontrol.querySelector(".error");
  errorDisplay.innerText = "";
  inputcontrol.classList.add("success");
  inputcontrol.classList.remove("error");
};
