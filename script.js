console.log('Hi ! I am JS !');

//* Je selectionne et je stocke
const questions = document.querySelectorAll('.question');
const reponses = document.querySelectorAll('.reponse');

// Utilisation d"une boucle FOREACH pour parcourir les questions
questions.forEach((item) => {
    console.log(item, 'item');

    item.addEventListener('click', function () {
        console.log('item cliqué');

        //? On utilise nextElementSibling pour accéder à l'enfant suivant du même parent
        const next = item.nextElementSibling;
        next.classList.toggle('visible');

        //? Pour la rotation de l'icone, on sait que c'est le dernier élément de la div.
        //? on utilise lastElementChild pour la selection
        const icone = item.lastElementChild;
        console.log(icone);

        icone.classList.toggle('fa-chevron-up');
    });
});
