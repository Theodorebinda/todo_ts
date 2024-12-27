
const taskInput = document.querySelector('#task-input') as HTMLInputElement;
const addTaskButton = document.querySelector('#add-task-btn') as HTMLButtonElement;
const taskList = document.querySelector('#task-list') as HTMLUListElement;

let tasks: Task[] = [];

addTaskButton?.addEventListener('click', () => {
    const taskContent = taskInput.value.trim();
    if (taskContent) {
        const newTask: Task = {
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


function deleteTask(taskId: number) {
    tasks = tasks.filter(task => task.id !== taskId);
    renderTasks();
}

