// 엔터 동작
const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let todo_array = [];

// localStorage에 todo_array를 저장하는 함수
function saveToDos() {
  // String의 형태로 배열을 저장
  localStorage.setItem(TODOS_KEY, JSON.stringify(todo_array));
}

// X 를 눌렀을 때 todo가 사라지는 함수
function deleteToDo(event) {
  // event가 일어난 객체(event.target)의 부모 노드를 저장한다
  const li = event.target.parentNode;
  // todo_array를 수정하고, todo_array를 localStorage에 저장하기 위한 조건
  // Araay.filter()함수를 이용
  todo_array = todo_array.filter((element) => element.id !== parseInt(li.id));

  // HTML 화면에서 li를 지운다
  li.remove();
  saveToDos();
}

// todo 객체를 받아서 화면에 그리는 함수
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

// todo를 작성하고 enter를 눌렀을때 동작하는 event함수
function handleToDoSubmit(event) {
  event.preventDefault(); // 이벤트 기본 동작 막기
  // input창에 적혀있는 내용을 저장한다
  const newTodo = toDoInput.value;
  // input창을 초기화한다
  toDoInput.value = "";
  // todo list를 개별적으로 구분하기 위해 object 형태로 만든다
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
