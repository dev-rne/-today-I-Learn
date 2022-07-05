const todoForm = document.querySelector(".js-todoForm"),
  todoInput = todoForm.querySelector("input"),
  todoList = document.querySelector(".js-todoList");

const TODOS_LS = "todos";
let todosArr = [];

function paintTodo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.innerText = "❌";
  const span = document.createElement("span");
  delBtn.addEventListener("click", deleteTodo);
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  todoList.appendChild(li);
  li.id = todosArr.length + 1;

  const todosObj = {
    text: text,
    id: todosArr.length + 1,
  };
  todosArr.push(todosObj);
  saveTodos();
}

function deleteTodo(e) {
  const button = e.target.parentNode;
  console.log(button);
  todoList.removeChild(button);
  const cleanTodos = todosArr.filter((todo) => {
    return todo.id !== parseInt(button.id);
  });
  todosArr = cleanTodos;
  saveTodos();
}

function saveTodos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(todosArr));
}
function handleSubmit(e) {
  e.preventDefault();
  const currentValue = todoInput.value;
  paintTodo(currentValue);
  todoInput.value = "";
}

function loadTodos() {
  const loadTodos = localStorage.getItem(TODOS_LS);
  if (loadTodos !== null) {
    const parseTodos = JSON.parse(loadTodos);
    parseTodos.forEach((todo) => {
      paintTodo(todo.text);
    });
  }
}

function init() {
  loadTodos();
  todoForm.addEventListener("submit", handleSubmit);
}

init();
