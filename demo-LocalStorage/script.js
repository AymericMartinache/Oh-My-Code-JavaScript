console.log('Hi ! I am JS !');

// On accède au Local Storage
const stockage = window.localStorage;
console.log(stockage);

// On ajoute une clé -> valeur dans le Local Storage
// localStorage.setItem('nom', 'Martin');

// Je récupère le contenu de stockage 'nom'
console.log(localStorage.getItem('nom'));
