import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js";

const bg = document.querySelector(".background");
const firstScreen = document.querySelector(".first-screen");

const startBtn = document.querySelector(".js-start-btn");

const dateContainer = document.querySelector(".date-container");

const todoContainer = document.querySelector(".todo-container");

let today = dayjs();
let day = today.add(-1, "days");
let previousday = day.format("ddd");
let previousdate = day.format("DD");

let currentday = today.format("ddd");
let currentdate = today.format("DD");

let upcomingday = today.add(1, "days");
let upday = upcomingday.format("ddd");
let update = upcomingday.format("DD");

let upcomingday2 = today.add(2, "days");
let upday2 = upcomingday2.format("ddd");
let update2 = upcomingday2.format("DD");

let upcomingday3 = today.add(3, "days");
let upday3 = upcomingday3.format("ddd");
let update3 = upcomingday3.format("DD");

let upcomingday4 = today.add(4, "days");
let upday4 = upcomingday4.format("ddd");
let update4 = upcomingday4.format("DD");

startBtn.addEventListener("click", () => {
  bg.classList.add("none");
  firstScreen.classList.add("none");

  renderDate();
  todoContainer.innerHTML += `<h1>Today</h1>
  `;
  renderTodo();

  todoContainer.innerHTML += ` <div class="input-container">
      <input type="text" placeholder="Write a task..." class="todo-input" />
      <button class="add-btn">Add</button>
    </div>`;
});

function renderTodo() {
  todoContainer.innerHTML += `
      <span class="category">Personal</span>
    <div class="todo">
    <input type="checkbox" />
    <p>Exercise For 30 Mintues</p>
    </div>
    `;
}
function renderDate() {
  dateContainer.innerHTML += `<div class="date-block">
       <p class="day">${previousday}</p>
       <span class="date">${previousdate}</span>
       </div>
       <div class="date-block active-date">
       <p class="day">${currentday}</p>
       <span class="date">${currentdate}</span>
       </div>
       <div class="date-block">
       <p class="day">${upday}</p>
       <span class="date">${update}</span>
       </div>
       <div class="date-block">
       <p class="day">${upday2}</p>
       <span class="date">${update2}</span>
       </div>
       <div class="date-block">
       <p class="day">${upday3}</p>
       <span class="date">${update3}</span>
       </div>
       <div class="date-block">
       <p class="day">${upday4}</p>
       <span class="date">${update4}</span>
       </div>`;
}
