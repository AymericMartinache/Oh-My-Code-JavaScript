console.log('Hi ! I am JS !');

// Cookies
// Je selectionne et je stocke

// Success button
const btnSuccess = document.querySelector('.btn-success');
console.log(btnSuccess);

// Deny button
const btnDeny = document.querySelector('.btn-deny');

// Cookies div
const cookies = document.querySelector('.cookies');
console.log(cookies);

// Local Storage
let valeurCle = localStorage.getItem('bannière');
console.log(valeurCle);

// On ajoute l'action sur le bouton
btnSuccess.addEventListener('click', function () {
    console.log('Clic sur le bouton');
    cookies.style.opacity = '0';

    // Je créé le localStorage avec la valeur 'oui'
    localStorage.setItem('bannière', 'oui');
});

// Condition d'affichage du cookie en fonciton du local storage
function check() {
    console.log('déclanché');

    if (valeurCle) {
        cookies.remove();
    } else console.log('Pas de local storage');
}
check();
