const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = [];

function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter( (toDo) => {
        return toDo.id !== parseInt(li.id);
    })
    toDos = cleanToDos;
    saveTodos();
}

function saveTodos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos) );
}

function showToDo(text) {
    const li = document.createElement("li");
    const deleteButton = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    deleteButton.innerText = "❌";
    deleteButton.addEventListener("click", deleteToDo);
    span.innerText = text;
    li.appendChild(deleteButton);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);
    toDoObj = {
        text: text,
        id: newId
    }
    toDos.push(toDoObj);
    saveTodos();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    showToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(toDo => {
            showToDo(toDo.text);
        });
    } 
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();