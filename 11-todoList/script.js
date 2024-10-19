console.log('Hi ! I am JS !');

//* Je selectionne et je stocke
// Formulaire
const form = document.getElementById('form');

// Input
const todo = document.getElementById('todo');

// Liste des tâches
const listItems = document.querySelector('.list-items');

//* Je récupère les données de l'input
form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const todoValue = todo.value;
    // console.log(todoValue);

    //* Je créé la div qui contiendra la tâche
    let item = `
        <div class="item">
            <p>${todoValue}</p>
            <button class="btn-delete">
                <i class="fas fa-trash-alt"></i>
            </button>
            <button class="btn-archive">
                <i class="fas fa-check-circle"></i>
            </button>
        </div>
    `;

    //* Je l'ajoute dans la liste des tâches
    listItems.innerHTML += item;

    //* Je vide l'input après le submit
    todo.value = '';

    //* Suppression de la tâche
    const btnDelete = document.querySelectorAll('.btn-delete');
    btnDelete.forEach((btn) => {
        btn.addEventListener('click', () => {
            // console.log('Delete');
            // On supprime la tâche qui est llélément parent du bouton
            btn.parentElement.remove();
        });
    });

    //
});
