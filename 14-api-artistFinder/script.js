console.log('Hi ! I am JS !');

//* Je sélectionne et je stocke
// Bouton refresh
const refresh = document.getElementById('refresh');
// La div qui affiche la photo
const resultat = document.getElementById('resultat');
// Image de l'artiste

//? On utilise l'API du site Unsplash (unsplash.com) pour récupérer une photo et ses infos

//* On créé une fonction qui va charger l'image
async function getImg() {
    // console.log('Fonction getImg');

    //! On utilise Try / Catch pour gérer les éventuelles erreurs
    try {
        // On fait le fetch
        const reponseJSON = await fetch(
            'https://api.unsplash.com/photos/random/?client_id=c9nk1r9dWLCmlgUfFp3R-zwp_VKeGiuZVPImoepVxgQ'
        );
        console.log(reponseJSON);

        // Je transforme en JS
        const reponseJS = await reponseJSON.json();
        console.log(reponseJS);

        // J'affiche les informations dans la page
        //? On utilise une ternaire si l'auteur n'a pas de bio

        resultat.innerHTML = `
        <img class="img-artist" src="${reponseJS.urls.regular}" alt="${
            reponseJS.description
        }" />
        <h1>Artiste : <span>${reponseJS.user.name}</span></h1>
        <p>Découvrez son univers : ${
            reponseJS.user.bio
                ? reponseJS.user.bio
                : 'Désolé, information manquante'
        }</p>
        ${
            reponseJS.user.instagram_username
                ? `<div class="btn">
                       <a class="btn-insta" target="_blank" href="https://instagram.com/${reponseJS.user.instagram_username}">
                           Je découvre sur Instagram
                       </a>
                   </div>`
                : `<div>
                       <p class"message">Pas de page Instagram ...</p>
                   </div>`
        }
    `;
        const img = document.querySelector('.img-artist');
        img.addEventListener('click', () => openFullscreen(img.src));
    } catch (error) {
        // On gère les erreurs
        console.log('Erreur du fetch: ', error);
    }
}

// Fonction pour ouvrir l'image en plein écran
function openFullscreen(src) {
    // Je créé l'élément modal
    const modal = document.createElement('div');
    modal.classList.add('fullscreen-modal');

    // J'ajoute l'image en plein écran à la modale
    modal.innerHTML = `<img src="${src}" alt="Image en plein écran">`;

    // J'ajoute un événement pour fermer la modale quand on clique sur l'image
    modal.addEventListener('click', () => {
        modal.remove();
    });

    // J'ajoute la modale au document
    document.body.appendChild(modal);
}

//* Bouton refresh
refresh.addEventListener('click', getImg);

getImg();
