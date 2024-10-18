console.log('Hi ! I am JS !');

//* Je selectionne et je stocke
// Vignettes
const vignettes = document.querySelectorAll('.small');

// Image grand format
const fullImg = document.getElementById('full');

// Bouton d'ajout au panier
const btn = document.querySelector('.btn-add');

// Texte du panier
const panierContainer = document.querySelector('.panier-container');

//* Gestion de la galerie d'images
// On ajoute un écouteur d'evenement sur chaque vignettes
vignettes.forEach((vignette) => {
    vignette.addEventListener('click', () => {
        // On récupère la source de l'image cliquée
        let imgSrc = vignette.getAttribute('src');
        console.log(imgSrc);

        // On remplace l'attribut src de fullImg par celle de l'image cliquée
        fullImg.setAttribute('src', imgSrc);
    });
});

//* Gestion du panier
let panier = 0;

// On ajoute un écouteur de clic sur le bouton d'ajout au panier
btn.addEventListener('click', () => {
    // console.log('clic panier');

    // Au clic, j'ajoute au panier
    panier = panier + 1;

    // On ajoute le texte dans la div
    // On gère le texte en foncition du nombres d'articles
    if (panier < 2) {
        panierContainer.innerText = `Vous avez ${panier} article dans votre panier.`;
    } else {
        panierContainer.innerText = `Vous avez ${panier} articles dans votre panier.`;
    }
});
