/* get the controls */
const txtEmail = document.getElementById("txt-email");
const txtPassword = document.getElementById("txt-password");
const btnLogin = document.getElementById("btn-login");

btnLogin.addEventListener("click", function () {
  if (
    txtEmail.value === "anischp@gmail.com" &&
    txtPassword.value === "sharder"
  ) {
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid Email or Password");
  }
});
