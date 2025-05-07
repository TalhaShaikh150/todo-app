import { renderDate } from "./dates.js";
const firstScreen = document.querySelector(".first-screen");

const startBtn = document.querySelector(".js-start-btn");

let todoContainer = document.querySelector(".todo-container");

const todoBtn = document.querySelector(".todo-button");

let inputBox = document.querySelector(".pop-up");
let mainContainer = document.querySelector("main");

let todoList = JSON.parse(localStorage.getItem("todoList")) || [];

startBtn.addEventListener("click", () => {
  firstScreen.classList.add("none");
  todoBtn.classList.remove("none");
  renderDate();
  renderTodo();
  renderInputPage();
});

function renderTodo() {
  document.querySelector(".today").classList.remove("none");
  let html = "";
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const { category, name, dueDate } = todoObject;
    html += `
    <div class="todoBox">
    <span class="category">${category}</span>
    <div class="todo">
    <div class="align">
    <input type="checkbox" class="checkbox"/>
    <label>${name}</label>
    </div>      
    <p>${dueDate}</p>
    </div>
    </div>
    `;
  }
  todoContainer.innerHTML = html;
  inputBox.classList.remove("visible");
  mainContainer.classList.remove("none");
}

function renderInputPage() {
  todoBtn.addEventListener("click", () => {
    mainContainer.classList.add("none");
    todoBtn.classList.add("none");
    inputBox.classList.add("visible");
  });
}

function addTodo() {
  const todoElement = document.querySelector(".js-todo");
  const dueDateElement = document.querySelector(".js-date");
  const categoryElement = document.querySelector(".js-category");
  const name = todoElement.value;
  const dueDate = dueDateElement.value;
  const category = categoryElement.value;
  todoList.push({ name, dueDate, category });
  saveToStorage();
  todoBtn.classList.remove("none");
  renderTodo();
  let btnContainer = document.querySelector(".btn-container");
  let categoryBtn = `<button class="category-btn">${categoryElement.value}</button>`;

  todoElement.value = "";
  dueDateElement.value = "";
  categoryElement.value = "";

  btnContainer.innerHTML += categoryBtn;
}

document.querySelector(".add-todo").addEventListener("click", addTodo);

//Local Storage
function saveToStorage() {
  localStorage.setItem("todoList", JSON.stringify(todoList));
}
