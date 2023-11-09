const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = this.elements.email.value;
  const password = this.elements.password.value;

  
  if (email === "example@example.com" && password === "password") {
    alert("Success");
   
  } else {
    alert("Error");
  }
});
