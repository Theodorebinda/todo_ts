"use strict";
const taskInput = document.querySelector('#task-input');
const addTaskButton = document.querySelector('#add-task-btn');
const taskList = document.querySelector('#task-list');
let tasks = [];
addTaskButton === null || addTaskButton === void 0 ? void 0 : addTaskButton.addEventListener('click', () => {
    const taskContent = taskInput.value.trim();
    if (taskContent) {
        const newTask = {
            id: Date.now(),
            content: taskContent,
            completed: false
        };
        tasks.push(newTask);
        renderTasks();
        taskInput.value = '';
    }
    console.log("Hello!");
});
function renderTasks() {
    taskList.innerHTML = tasks.map(task => `
        <li>
            ${task.content}
            <button onclick="deleteTask(${task.id})">Supprimer</button>
        </li>
    `).join('');
    console.log("Hello!");
}
function deleteTask(taskId) {
    tasks = tasks.filter(task => task.id !== taskId);
    renderTasks();
}
