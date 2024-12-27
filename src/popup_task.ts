const openPopup = document.querySelector('.openPopup') as HTMLButtonElement;
const closePopup = document.querySelector('.closePopup') as HTMLButtonElement;
const contentPopup = document.querySelector('.contentPopup') as HTMLDivElement;
const body = document.querySelector('body') as HTMLBodyElement;

openPopup.addEventListener('click', () => {
    contentPopup.classList.remove('hidden');
    contentPopup.classList.add('flex');
    console.log("Popup ouvert");
});

closePopup.addEventListener('click', () => {
    contentPopup.classList.add('hidden');
    contentPopup.classList.remove('flex');
    body.classList.remove('opacity-50');
    console.log("Popup fermé");
});

// Fermer le popup en cliquant en dehors du contenu
contentPopup.addEventListener('click', (event) => {
    if (event.target === contentPopup) {
        contentPopup.classList.add('hidden');
        body.classList.remove('opacity-50');
        console.log("Popup fermé en cliquant à l'extérieur");
    }
});
