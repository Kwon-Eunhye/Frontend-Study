const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY =  "todos";
let toDos = []; // 업데이트가 가능하도록 let으로 선언

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}
function deleteTodo(event) {
  const deleteLi = event.target.
  console.log(deleteLi)
  deleteLi.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(deleteLi.id));  // parseInt 문자열을 숫자로 바꿔줌
  saveToDos();
}

function paintToDo(newTodo) { // object를 받음
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;  // object 중 text 속성을 텍스트로 보여줌
  const btn = document.createElement("button");
  btn.innerHTML ='<span class="material-symbols-rounded">close</span>'
  btn.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(btn);
  toDoList.appendChild(li);
}


function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  }
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSubmit)

// function sayHello(item) {
//   console.log("this is the turn of", item)
// }
const savedToDos = localStorage.getItem(TODOS_KEY)

// console.log("1",savedToDos)

if(savedToDos) { // 의미가 같음  (savedToDos !== null)
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo)

}