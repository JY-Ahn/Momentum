// 엔터 동작
const toDoForm = document.querySelector('#todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.getElementById('todo-list');

function deleteToDo(event){
    const li = event.target.parentNode;
    li.remove();
    // console.log(event.target.parentNode);
}
function paintToDo(newTodo){
    const todo_list = document.createElement('li');
    
    const todo_span = document.createElement('span');
    todo_span.innerText = newTodo;
    
    const button = document.createElement('button');
    button.innerText = 'X';
    button.addEventListener('click', deleteToDo);

    todo_list.appendChild(button);
    todo_list.appendChild(todo_span);
    toDoList.appendChild(todo_list);
}
function handleToDoSubmit(event){
    event.preventDefault(); // 이벤트 기본 동작 막기
    // localStorage에 저장
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    // localStorage.setItem(newTodo);
    paintToDo(newTodo);

    console.dir(toDoList);
}



toDoForm.addEventListener("submit",handleToDoSubmit);