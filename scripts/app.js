import { renderDate } from "./dates.js";
const firstScreen = document.querySelector(".first-screen");

const startBtn = document.querySelector(".js-start-btn");

let todoContainer = document.querySelector(".todo-container");

const btnContainer = document.querySelector(".btn-container");
const todoBtn = document.querySelector(".todo-button");

const emptyMessage = document.querySelector(".empty-container");
let inputBox = document.querySelector(".pop-up");
let mainContainer = document.querySelector("main");

let todoList = JSON.parse(localStorage.getItem("todoList")) || [];

let localBtn = JSON.parse(localStorage.getItem("button")) || [];

startBtn.addEventListener("click", () => {
  firstScreen.classList.add("none");
  todoBtn.classList.remove("none");
  localBtn.forEach((btnHTML) => {
    btnContainer.innerHTML += btnHTML;
  });
  let newCategoryBtn = document.querySelectorAll(".category-btn");

  newCategoryBtn.forEach((newBtn) => {
    newBtn.addEventListener("click", () => {
      toggleBtn();
      showCategory(newBtn);
    });
  });
  renderDate();
  renderTodo();
  renderInputPage();
});

function renderTodo() {
  todoBtn.classList.remove("none");
  document.querySelector(".today").classList.remove("none");
  document.querySelector(".category-btn").classList.remove("none");
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

  if (todoContainer.innerHTML === "") {
    emptyMessage.classList.remove("none");
  }

  inputBox.classList.remove("visible");
  mainContainer.classList.remove("none");
}

function renderInputPage() {
  todoBtn.addEventListener("click", () => {
    mainContainer.classList.add("none");
    todoBtn.classList.add("none");
    inputBox.classList.add("visible");
    emptyMessage.classList.add("none");
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
  todoBtn.classList.remove("none");

  renderTodo();
  let categoryBtn = `<button class="category-btn js-category-btn">${category}</button>`;

  todoElement.value = "";
  dueDateElement.value = "";
  categoryElement.value = "";

  if (!localBtn.includes(categoryBtn)) {
    localBtn.push(categoryBtn);
    localStorage.setItem("button", JSON.stringify(localBtn));
    btnContainer.innerHTML += categoryBtn;
    let newCategoryBtn = document.querySelectorAll(".category-btn");

    newCategoryBtn.forEach((newBtn) => {
      newBtn.addEventListener("click", () => {
        toggleBtn();
        showCategory(newBtn);
      });
    });
  }
  saveToStorage();
}

document.querySelector(".add-todo").addEventListener("click", addTodo);

document.querySelector(".back-todo").addEventListener("click", renderTodo);
function toggleBtn() {
  const buttons = document.querySelectorAll(".category-btn");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((btn) => btn.classList.remove("is-toggled"));
      button.classList.add("is-toggled");
    });
  });
}

function showCategory(newBtn) {
  let updatedHtml = "";
  for (let i = 0; i < todoList.length; i++) {
    if (newBtn.innerHTML === "All") {
      renderTodo();
    } else if (newBtn.innerHTML === todoList[i].category) {
      updatedHtml += `<div class="todoBox">
    <span class="category">${todoList[i].category}</span>
    <div class="todo">
    <div class="align">
    <input type="checkbox" class="checkbox"/>
    <label>${todoList[i].name}</label>
    </div>      
    <p>${todoList[i].dueDate}</p>
    </div>
    </div>`;
      todoContainer.innerHTML = updatedHtml;
    }
  }
}

function saveToStorage() {
  localStorage.setItem("todoList", JSON.stringify(todoList));
}
