console.log('Hi ! I am JS !');

// Je selectionne et je stocke

// div switch
const switchBox = document.querySelector('.switch-box');

// div btn (le cercle)
const btn = document.querySelector('.btn');

// l'icone
const icone = document.querySelector('i');

// la div Container
const container = document.querySelector('.container');

// le titre
const titre = document.querySelector('h1');

// action de la div switch

switchBox.addEventListener('click', function () {
    console.log('Switch action');
    btn.classList.toggle('btn-change');
    icone.classList.toggle('icone-change');
    icone.classList.toggle('fa-sun');
    switchBox.classList.toggle('switch-change');
    container.classList.toggle('container-change');

    // Modification du texte
    if (titre.innerText === 'DARK MODE') {
        titre.innerText = 'LIGHT MODE';
    } else {
        titre.innerText = 'DARK MODE';
    }
});
