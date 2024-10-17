console.log('Hi ! I am JS !');

//* Je selectoinne et je stock
// Modale
const modal = document.querySelector('.modal-container');

// Bouton afficher le code
const btn = document.querySelector('.btn-success');

// Code promo
const code = document.querySelector('.code');

// Icone de fermeture de la modale
const icone = document.querySelector('.fa-times');

function displayModal() {
    console.log('Défilement de la fenetre ');
    let hauteur = document.documentElement.scrollTop;

    if (hauteur > 400) {
        modal.style.display = 'flex';
    }
}

// Affichage du code
btn.addEventListener('click', displayCode);

function displayCode() {
    code.style.display = 'block';
}

// Detection du défilement
window.addEventListener('scroll', displayModal);

// Fermeture de la modal
icone.addEventListener('click', function () {
    modal.style.display = 'none';
    window.removeEventListener('scroll', displayModal);
});
