'use strict'; // enables the modern js

const input = document.querySelector('.add-task-input');
const addBtn = document.querySelector('.add-btn');
const taskContainer = document.querySelector('.tasks-container');


addBtn.addEventListener('click', () => {

  const newTask = input.value.trim();

  if(newTask !== "") {
    const task = document.createElement('div');
    task.classList.add('task');
    task.innerHTML = `
      <div>
        <input type="checkbox" class="item">
        <span class="task-text">${newTask}</span>
      </div>
      <button class="trash-btn">
        <img src="trash.svg" alt="trash can">
      </button>
    `;
    taskContainer.appendChild(task);

    input.value = "";
  }
});


taskContainer.addEventListener('click', (e) => {
  if(e.target.closest('.trash-btn')) {
    const task = e.target.closest('.task');
    task.remove();
  }
});
