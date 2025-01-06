const taskInput = document.querySelector('#task-input') as HTMLInputElement;
const taskDescription = document.querySelector('#task-description') as HTMLInputElement;
const addTaskButton = document.querySelector('#add-task-btn') as HTMLButtonElement;
const taskList = document.querySelector('#task-list') as HTMLUListElement;
const poppup = document.querySelector('.popup') as HTMLDivElement;

// Gérer l'ouverture et la fermeture du popup
const openPopupButton = document.querySelector('.openPopup') as HTMLButtonElement;
const closePopupButtons = document.querySelectorAll('.closePopup') as NodeListOf<HTMLButtonElement>;

openPopupButton.addEventListener('click', () => poppup.classList.remove('hidden'));
closePopupButtons.forEach(button => button.addEventListener('click', () => poppup.classList.add('hidden')));



let tasks: Task[] = [];

function formatDate(timestamp: number): string {
    const date = new Date(timestamp);
    return new Intl.DateTimeFormat('fr-FR', {
        dateStyle: 'long',
        timeStyle: 'short',
    }).format(date);
}

addTaskButton.addEventListener('click', () => {
    const taskContent = taskInput.value.trim();
    const taskDescriptionContent = taskDescription.value.trim();
    if (taskContent) {
        const newTask: Task = {
            id: Date.now(),
            title: taskContent,
            descriptions: taskDescriptionContent,
            createdAt: formatDate(Date.now()),
            completed: false,
        };
        tasks.push(newTask);
        renderTasks();
        taskInput.value = '';
    }
    poppup.classList.add('hidden');
});

function renderTasks() {
    taskList.innerHTML = tasks.map(task => `
        <div class="flex items-center justify-between bg-slate-50 shadow-md border rounded-md ">
         <li class="p-2">
                    <div class="flex flex-col ">
                        <div class="flex  items-center justify-start gap-4"> <input type="checkbox" class="size-4">
                            <span class="title font-medium text-lg">${task.title}</span>
                        </div>
                         <span class="text-xs ">${task.descriptions}</span>
                    </div>
                        
                        <div class="flex gap-4 items-center py-2">
                            <span class="text-sm">${task.createdAt}</span>
                            <i data-lucide="message-circle" class="size-4"></i>
                            <i data-lucide="pencil" class="size-4"></i>
                        </div> </li>
            <button class="delete-btn bg-red-500 px-2 py-1 rounded" data-id="${task.id}">
                Supprimer
            </button>
        </div>

      
           
        
    `).join('');

    // Ajouter les gestionnaires pour les boutons "Supprimer"
    document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', () => {
            const taskId = parseInt((button as HTMLElement).dataset.id!);
            deleteTask(taskId);
        });
    });
    // lucide.createIcons();
}


function deleteTask(taskId: number) {
    tasks = tasks.filter(task => task.id !== taskId);
    renderTasks();

}
