// Selection d'un element
const titre = document.getElementById('titre');

// Action a réaliser
titre.style.color = '#067bad';

let score = 0;
// console.log(score);

score = score + 1;
// console.log(score, 'après addition');

// Je stock une chaine de caractères
const cours = 'JavaScript';
// Je vérifie
// console.log(cours);

// -------------- //

// * Mini-jeu

//? Le but est de compter le nombre de clic fait sur des cercles en mouvement

//! La méthode des 3S

// Je créé une variable compteur initialisé à 0
let count = 0;
console.log('Compteur au démarrage : ', count);

// Ajout du compteur sur la page
const counter = document.getElementById('counter');
counter.innerText = `Compteur : ${count}`;

// Je selectionne et je stock le cercle
//! Je Selectionne (un élément)
//! Je Stock
const btnRed = document.getElementById('btn-red');
const btnBlue = document.getElementById('btn-blue');
const btnRestart = document.getElementById('try-again');

// J'ajoute un événement aux cercles
//! Je Soumet (une action à l'élément)
btnRed.addEventListener('click', function () {
    console.log('Cliquou sur le rouge !');
    add();
});
//! Je Soumet (une action à l'élément)
btnBlue.addEventListener('click', function () {
    console.log('Cliquou sur le bleu !');
    add();
});

//! Je Soumet (une action à l'élément)
btnRestart.addEventListener('click', () => {
    location.reload();
});

//? Pour ne pas avoir à répéter (DRY), on créé une fonction add()
function add() {
    // J'ajoute une action au compteur
    count = count + 1;
    // console.log('Compteur de clic : ', count);

    // Mise à jour de l'élément counter en ajoutant du text :
    counter.innerText = `Compteur : ${count}`;
}

// Gestion du message "Fini"
const message = document.getElementById('message');
// console.log(message);

//? Ajout d'un chronometre
// Après 10s, les cercles disparaissent
setTimeout(() => {
    btnRed.remove();
    btnBlue.remove();
    message.innerText = 'Partie terminée !';

    // count = 0;
    // counter.innerText = `Compteur : ${count}`;
}, 2000);
