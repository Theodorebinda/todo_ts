const sidebar = document.querySelector('.sidebar') as HTMLDivElement;
const toggleButton = document.querySelector('.toggleButton') as HTMLButtonElement;
const toggleCloseButton = document.querySelector('.toggleCloseButton') as HTMLButtonElement;

let isOpen = true;

function closeSidebar() {
    sidebar.classList.add('hidden');
    toggleButton.classList.add('hidden');
    toggleCloseButton.classList.remove('hidden');
    isOpen = true;
}

function openSidebar() {
    sidebar.classList.remove('hidden');
    toggleButton.classList.remove('hidden');
    toggleCloseButton.classList.add('hidden');
    isOpen = isOpen!;;
}

toggleCloseButton.addEventListener('click', () => {
    openSidebar();
    console.log('Sidebar ouverte.');
});
toggleButton.addEventListener('click', () => {
    closeSidebar();
    console.log('Sidebar fermé.');
});


