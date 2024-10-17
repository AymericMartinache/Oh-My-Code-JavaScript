console.log('Hi ! I am JS !');

// Je selectionne et je stocke

// Smiley
const icone = document.querySelector('i');
console.log(icone);

// Je soumet l'icone à une action click
icone.addEventListener('click', function () {
    console.log('Smiley !!');
    icone.classList.toggle('fa-meh-blank');
    icone.classList.toggle('fa-smile-wink');
    icone.classList.toggle('happy');
});

// Je selectionne le bouton
const btnButton = document.querySelector('.btn');
btnButton.addEventListener('click', function () {
    console.log('Clic sur le btn');
    if (btnButton.innerText === 'Abonné !') {
        btnButton.innerText = 'Abonnez-vous !';
    } else {
        btnButton.innerText = 'Abonné !';
    }

    btnButton.classList.toggle('abonne');
});
