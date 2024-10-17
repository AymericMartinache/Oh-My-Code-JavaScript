console.log('Hi ! I am JS !');

//? Pseudo code
// Au clic sur le bouton
// Une div est créée et est ajouté dans la div "container-notifications"
// L'élément dusparait au boud de quelques secondes

//? ---

//* Je selectionne et je stock
// Bouton Enregister
const btn = document.querySelector('.btn');

// Container des notifications
const ctn = document.querySelector('.container-notifications');

//* Ecoute de l'évènement clic sur le bouton
btn.addEventListener('click', function () {
    console.log('Bouton cliqué !');

    // Je créé un élément div
    const notification = document.createElement('div');
    console.log(notification);
    // J'ajoute du style
    notification.classList.add('toast');
    // J'ajoute du texte dans la div
    notification.innerText = 'Votre fichier est bien enregistré...';
    // J'ajoute lélément au container
    ctn.appendChild(notification);

    // Ajout d'un timer pour supprimer la notification
    setTimeout(function () {
        notification.remove();
    }, 3000);
});
