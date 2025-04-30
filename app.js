import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js";

const bg = document.querySelector(".background");
const backBtn = document.querySelector(".js-back-btn");
const firstScreen = document.querySelector(".first-screen");

const startBtn = document.querySelector(".js-start-btn");

const dateContainer = document.querySelector(".date-container");

const todoContainer = document.querySelector(".todo-container");

const dates = [
  {
    day: "Wed",
    date: "25",
  },
  {
    day: "Thu",
    date: "26",
  },
  {
    day: "Fri",
    date: "27",
  },
  {
    day: "Sat",
    date: "28",
  },
  {
    day: "Sun",
    date: "29",
  },
  {
    day: "Mon",
    date: "30",
  },
];

const todoData = [
  {
    category: "Design",
    todo: "Creates Icon For Dashboard",
  },
  {
    category: "Personal",
    todo: "Creates Icon For Dashboard",
  },
  {
    todo: "Hello World",
  },
];

startBtn.addEventListener("click", () => {
  // backBtn.classList.add("visible");
  bg.classList.add("none");
  firstScreen.classList.add("none");

  dates.forEach((date) => {
    dateContainer.innerHTML += `
    <div class="date-block">
    <p class="day">${date.day}</p>
    <span class="date">${date.date}</span>
    </div>
    `;
  });

  todoContainer.innerHTML += `<h1>Today</h1>
  `;
  todoData.forEach((todo) => {
    if (todo.category === undefined) {
      todo.category = "";
    }
    todoContainer.innerHTML += `
      <span class="category">${todo.category}</span>
    <div class="todo">
    <input type="checkbox" />
    <p>${todo.todo}</p>
    </div>
    `;
  });
  todoContainer.innerHTML += ` <div class="input-container">
      <input type="text" placeholder="Write a task..." class="todo-input" />
      <button class="add-btn">Add</button>
    </div>`;
});
