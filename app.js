import { renderDate } from "./dates.js";
const firstScreen = document.querySelector(".first-screen");

const startBtn = document.querySelector(".js-start-btn");

const todoContainer = document.querySelector(".todo-container");

const addBtnContainer = document.querySelector(".add-btn-container");

startBtn.addEventListener("click", () => {
  firstScreen.classList.add("none");
  renderDate();
  renderTodo();
  generateButton();
});

function renderTodo() {
  todoContainer.innerHTML += `<h1 class="today">Today</h1>
  `;
  todoContainer.innerHTML += `
      <span class="category">Personal</span>
    <div class="todo">
    <input type="checkbox" />
    <p>Exercise For 30 Mintues</p>
    </div>
    `;
}

function generateButton() {
  addBtnContainer.innerHTML += `<button class="todo-btn add-todo-btn">
    <i class="fa-solid fa-plus"></i>
    </button>`;

  document.querySelector(".add-todo-btn").addEventListener("click", () => {
    let mainContainer = document.querySelector("main");
    mainContainer.classList.add("none");
    document.body.innerHTML += `<div class="pop-up">
      <input type="text" placeholder="Enter Your Task" class="js-todo" />
      <input type="date" class="js-date" />
      <input type="text" placeholder="Category" class="js-category" />
    </div>`;
  });
}

function showInput() {
  const todoInput = document.querySelector(".js-todo");
  const dateInput = document.querySelector(".js-date");
  const categoryInput = document.querySelector(".js-category");
}
