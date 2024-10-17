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

// On ajoute l'action sur le bouton
btnSuccess.addEventListener('click', function () {
    console.log('Clic sur le bouton');
    cookies.style.opacity = '0';
});
