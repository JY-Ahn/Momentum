// 엔터 동작
const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let todo_array = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todo_array));
}

function deleteToDo(event) {
  const li = event.target.parentNode;
  li.remove();
}

function paintToDo(newTodo) {
  const todo_list = document.createElement("li");
  todo_list.id = newTodo.id;
  const todo_span = document.createElement("span");
  todo_span.innerText = newTodo.text;

  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deleteToDo);

  todo_list.appendChild(button);
  todo_list.appendChild(todo_span);
  toDoList.appendChild(todo_list);
  // todo 를 객체로 만들기 -> id 부여
}

function handleToDoSubmit(event) {
  event.preventDefault(); // 이벤트 기본 동작 막기
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoOjb = {
    text: newTodo,
    id: Date.now(),
  };
  todo_array.push(newTodoOjb);
  paintToDo(newTodoOjb);
  saveToDos();
}
function loadToDos() {
  const todos = JSON.parse(localStorage.getItem(TODOS_KEY));
  todos.forEach((element) => paintToDo(element));
}

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  todo_array = parsedToDos;

  loadToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);
