console.log('Hi ! I am JS !');

//* Je selectionne et je stocke
// Vignettes
const vignettes = document.querySelectorAll('.small');
// Grand format
const fullImg = document.getElementById('full');

//* On ajoute un écouteur d'evenement sur chaque vignettes
vignettes.forEach((vignette) => {
    vignette.addEventListener('click', () => {
        // On récupère la source de l'image cliquée
        let imgSrc = vignette.getAttribute('src');
        console.log(imgSrc);

        // On remplace l'attribut src de fullImg par celle de l'image cliquée
        fullImg.setAttribute('src', imgSrc);
    });
});
