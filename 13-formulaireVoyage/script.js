console.log('Hi ! I am JS !');

// Fonction pour formater les dates au format souhaité
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    };
    return new Intl.DateTimeFormat('fr-FR', options).format(date);
}

//* Je récupère et je stocke
// Formulaire
const form = document.getElementById('form');
// Champs du formulaire
const pays = document.getElementById('pays');
const start = document.getElementById('start');
const end = document.getElementById('end');
// Liste des résultats
const listResultats = document.querySelector('.liste-resultats');

// Base de données des voyages
const voyages = [
    { pays: 'borabora', prix: 1790, voyageurs: 4 },
    { pays: 'bahamas', prix: 1790, voyageurs: 4 },
    { pays: 'bahamas', prix: 1490, voyageurs: 2 },
    { pays: 'tahiti', prix: 1790, voyageurs: 4 },
];

//* Validation du formulaire
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const choix = {
        pays: pays.value,
        start: start.value,
        end: end.value,
    };

    // Stockage en localStorage
    localStorage.setItem('details', JSON.stringify(choix));

    // Rafraîchir la page pour afficher les infos stockées
    window.location.reload();
});

//* Affichage des détails
function displayDetails() {
    const choixObjet = JSON.parse(localStorage.getItem('details'));

    //? Si il y a un choix, alors j'affiche les résultats
    if (choixObjet) {
        // Pré-remplissage des champs
        pays.value = choixObjet.pays;
        start.value = choixObjet.start;
        end.value = choixObjet.end;

        // Formatage des dates
        const startFormatted = formatDate(start.value);
        const endFormatted = formatDate(end.value);

        // Filtrage des résultats
        const resultats = voyages.filter(
            (voyage) => voyage.pays === pays.value
        );

        // Création de l'affichage
        //? J'utilise une ternaire pour l'affichage des résultats ou d'une phrase
        listResultats.innerHTML =
            resultats.length > 0
                ? resultats
                      .map(
                          (resultat) => `
                <div class="item">
                    <p class="item-pays">${resultat.pays}</p>
                    <p>Offre pour ${resultat.voyageurs} personne(s)</p>
                    <p>Prix (vol inclus) : ${resultat.prix}€</p>
                    <p>Départ : ${startFormatted}</p>
                    <p>Retour : ${endFormatted}</p>
                    <button>Go !</button>
                </div>
            `
                      )
                      .join('')
                : `<p class="message">Aucun voyage...</p>`;
    }
    //? Sinon j'affiche un message
    else {
        // Aucun choix enregistré dans le localStorage
        listResultats.innerHTML = `<p class="message">Veuillez remplir le formulaire pour voir les résultats.</p>`;
    }
}

// Appel de la fonction d'affichage au chargement
displayDetails();
