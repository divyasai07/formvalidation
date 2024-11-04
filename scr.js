document.addEventListener("DOMContentLoaded", function () {
  const username = document.getElementById("user_name");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const form = document.getElementById("form");
  const username_error = document.getElementById("username_error");
  const email_error = document.getElementById("email_error");
  const password_error = document.getElementById("password_error");

  const email_check = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  const password_check =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  username.addEventListener("input", function () {
    if (username.value.trim() === "") {
      username_error.innerHTML = "Name must be filled";
      username.style.borderColor = "red";
    } else {
      username_error.innerHTML = "";
      username.style.borderColor = "black";
    }
  });
  email.addEventListener("input", function () {
    if (email.value.trim() === "") {
      email_error.innerHTML = "Email must be filled";
      email.style.borderColor = "red";
    } else if (!email_check.test(email.value.trim())) {
      email_error.innerHTML = "Email must be valid";
      email.style.borderColor = "red";
    } else {
      email_error.innerHTML = "";
      email.style.borderColor = "black";
    }
  });
  password.addEventListener("input", function () {
    if (password.value.trim() === "") {
      password_error.innerHTML = "Password must be filled";
      password.style.borderColor = "red";
    } else if (!password_check.test(password.value.trim())) {
      password_error.innerHTML = "password must be valid";
      password.style.borderColor = "red";
    } else {
      password_error.innerHTML = "";
      password.style.borderColor = "black";
    }
  });
  form.addEventListener("submit", (e) => {
    let valid = true;

    if (username.value.trim() === "") {
      e.preventDefault();
      username_error.innerHTML = "Name must be filled";
      username.style.borderColor = "red";
      valid = false;
    } else {
      username_error.innerHTML = "";
      username.style.borderColor = "black";
    }

    if (!email_check.test(email.value.trim())) {
      e.preventDefault();
      email_error.innerHTML = "Email must be valid";
      email.style.borderColor = "red";
      valid = false;
    } else {
      email_error.innerHTML = "";
    }

    if (!password_check.test(password.value.trim())) {
      e.preventDefault();
      password_error.innerHTML =
        "Password must be at least 8 characters long, contain at least one letter, one number, and one special character";
      valid = false;
      password.style.borderColor = "red";
    } else {
      password_error.innerHTML = "";
    }

    if (valid) {
    }
  });
});
