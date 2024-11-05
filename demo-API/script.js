console.log('Hi ! I am JS !');

// Je séléctionne et je stocke
// Liste de tache
const item = document.querySelector('.taskList');

//* FETCH
// On récupère les données depuis une API (v)
// fetch('https://jsonplaceholder.typicode.com/todos/1').then((Response) =>
//     Response.json().then((json) => console.log(json))
// );

//* ASYNC / AWAIT
async function enAttente() {
    const responseJSON = await fetch(
        'https://jsonplaceholder.typicode.com/todos/2'
    );

    // Ce code est exécuté après réception de la réponse

    // On convertit la réponse au format JavaScript
    const reponseJS = await responseJSON.json();
    console.log(reponseJS, '-> Objet JavaScript');

    item.innerHTML = `
                  <ul>
                    <li>
                        <h2>${reponseJS.id} - ${reponseJS.title}</h2>
                        <p>Statut :  ${
                            reponseJS.completed === false
                                ? 'Non terminée'
                                : 'Terminée'
                        }</p>
                    </li>
                </ul>
    `;
}
enAttente();
