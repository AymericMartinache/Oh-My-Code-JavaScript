console.log('Hi ! I am JS !');

//* Je selectionne et je stocke
// Icone Burger
const icone = document.querySelector('.navbar-mobile i');

// Modal
const modal = document.querySelector('.modal');

//* Je soumet une action
icone.addEventListener('click', function () {
    console.log('icone cliqué !');
    modal.classList.toggle('modal-change');
    icone.classList.toggle('fa-times');
});
