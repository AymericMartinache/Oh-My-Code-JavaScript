console.log('Hi ! I am JS !');

//* Je selectionne et je stocke
// Formulaire
const form = document.getElementById('form');

// Input
const todo = document.getElementById('todo');

// Liste des tâches
const listItems = document.querySelector('.list-items');

// Message d'erreur
const error = document.querySelector('.error');

//* Je récupère les données de l'input
form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const todoValue = todo.value;
    // console.log(todoValue);

    if (todoValue !== '') {
        //* Si l'input n'est pas vide

        // Je créé la div qui contiendra la tâche
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

        // Je l'ajoute dans la liste des tâches
        listItems.innerHTML += item;

        // Je réinitialise le formulaire
        form.reset();
    } else {
        //* Si l'input est vide, j'affiche le message d'erreur pendant 3s
        error.classList.remove('invisible');
        setTimeout(() => {
            error.classList.add('invisible');
        }, 3000);
    }

    //* Suppression de la tâche
    const btnDelete = document.querySelectorAll('.btn-delete');
    btnDelete.forEach((btn) => {
        btn.addEventListener('click', () => {
            // console.log('Delete');
            // On supprime la tâche qui est llélément parent du bouton
            btn.parentElement.remove();
        });
    });

    //* Archivage de la tâche
    const btnArchive = document.querySelectorAll('.btn-archive');
    btnArchive.forEach((btn) => {
        btn.addEventListener('click', () => {
            console.log('Archive');
            btn.parentElement.classList.toggle('done');
        });
    });
});
