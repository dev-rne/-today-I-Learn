const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings"),
  logoutBtn = document.querySelector(".logout");

let USER_LS = "currentUser";
const SHOWING_CN = "showing";

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  todoForm.classList.add(SHOWING_CN);
  logoutBtn.classList.add(SHOWING_CN);
  todoList.classList.add(SHOWING_CN);
  logoutBtn.innerText = `Log out, by ${text}`;
  greeting.innerText = `Hello, ${text}`;

  logoutBtn.addEventListener("click", logout);
}

function logout() {
  localStorage.removeItem(USER_LS);
  loadName();
}

function setName(user) {
  localStorage.setItem(USER_LS, user);
}

function handleSubmit(e) {
  e.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  setName(currentValue);
  input.value = "";
}
function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
  greeting.classList.remove(SHOWING_CN);
  todoForm.classList.remove(SHOWING_CN);
  logoutBtn.classList.remove(SHOWING_CN);
  todoList.classList.remove(SHOWING_CN);
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    //she is not
    askForName();
  } else {
    //she is
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
