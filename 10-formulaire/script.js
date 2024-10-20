console.log('Hi ! I am JS !');

//* Je selectionne et je stocke

// Titre
const titre = document.getElementById('titre');

// Formulaire
const form = document.getElementById('formulaire');

// Prénom
const prenom = document.getElementById('prenom');

// Nom
const nom = document.getElementById('nom');

// EMail
const email = document.getElementById('email');

// Mesasge
const message = document.getElementById('message');

// Messages d'erreur
const msgError = document.querySelectorAll('.error');

//* Je detecte la validation du formulaire
form.addEventListener('submit', (evt) => {
    // Je annule le comportement par défaut du submit qui recharge la page
    evt.preventDefault();
    console.log('Formulaire envoyé');

    //* Je récupère les entrées de l'utilisateur (valeurs de chaque input)
    // Le .trim() permet de supprimer les espaces
    const prenomValue = prenom.value.trim();
    const nomValue = nom.value.trim();
    const emailValue = email.value.trim();
    const messageValue = message.value.trim();

    //* On réinitialise les éventuels message d'erreurs
    msgError.forEach((error) => {
        error.classList.add('invisible');
    });

    //* On vérifie si les données entrées sont correctes
    // Le .length permet de compter le nombre de caractères
    if (prenomValue.length < 2 || prenomValue.length > 10) {
        // console.log('erreur prenom');
        // On supprime la calsse "invisible" afin d'afficher le message d'erreur
        prenom.nextElementSibling.classList.remove('invisible');
    } else if (nomValue.length < 3 || nomValue.length > 15) {
        // console.log('erreur nom');
        nom.nextElementSibling.classList.remove('invisible');
    } else if (messageValue.length < 2 || prenomValue.length > 10) {
        // console.log('erreur message');
        message.nextElementSibling.classList.remove('invisible');
    } else if (emailValue === '') {
        // console.log('erreur email');
        email.nextElementSibling.classList.remove('invisible');
    } else {
        // console.log('Succès');
        // On modifie le titre si le formulaire a bien été envoyé
        titre.innerText = 'Votre message a bien été envoyé !';

        // On retire le formulaire
        form.remove();
    }
});
