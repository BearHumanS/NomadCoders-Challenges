const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const username = "username";

function loginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  console.log(username);
  greeting.innerText = `Hello ${username}`; // = "Hello " + username;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  
}

loginForm.addEventListener("submit", loginSubmit);
