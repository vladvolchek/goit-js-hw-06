const form = document.querySelector(".login-form");
console.dir(form);

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === "" || password === "") {
    return alert(`Помилка! Всі поля повинні бути заповнені! `);
  }

  const data = {
    Email: email,
    Password: password,
  }
  console.log(data);

  form.reset();
}
