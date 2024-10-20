console.log('Hi ! I am JS !');

//* Je selectionne et je stocke
// Div posts qui contiendra les articles
const postsContainer = document.querySelector('.posts');
// console.log(postsContainer);

//* Création d'un tableau d'objets (1 objet = 1 article)
const posts = [
    {
        titre: 'SEO, les bonnes pratiques',
        hashtag: '#SEO',
        extrait:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut molestias, ipsa rerum odit voluptas natus quo. Dicta esse neque repellendus alias tenetur! Delectus laboriosam sunt perspiciatis corrupti fugiat odit tenetur alias. Quas quibusdam magni rerum corporis veritatis eligendi fuga nemo tempore aliquid sequi, perspiciatis est molestiae voluptates illo itaque cupiditate!',
    },
    {
        titre: 'Bien débuter en référencement payant',
        hashtag: '#Référencement',
        extrait:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut molestias, ipsa rerum odit voluptas natus quo. Dicta esse neque repellendus alias tenetur! Delectus laboriosam sunt perspiciatis corrupti fugiat odit tenetur alias. Quas quibusdam magni rerum corporis veritatis eligendi fuga nemo tempore aliquid sequi, perspiciatis est molestiae voluptates illo itaque cupiditate!',
    },
    {
        titre: 'Content Marketing, les bons arguments',
        hashtag: '#contentmarketing',
        extrait:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut molestias, ipsa rerum odit voluptas natus quo. Dicta esse neque repellendus alias tenetur! Delectus laboriosam sunt perspiciatis corrupti fugiat odit tenetur alias. Quas quibusdam magni rerum corporis veritatis eligendi fuga nemo tempore aliquid sequi, perspiciatis est molestiae voluptates illo itaque cupiditate!',
    },
];

//* J'affiche chaque éléments du tableau dans la div
// On boucle dans le tableau pour chaque articles
posts.forEach((item) => {
    // console.log(item);

    // Création d'une div en utilisant les template strings
    const article = `
            <div class="post">
                <div class="post-titre">${item.titre}</div>
                <div class="post-extrait">${item.extrait}</div>
                <div class="post-hashtag">${item.hashtag}</div>
            </div>
        `;
    // console.log(article);

    // Ajout des articles sur la page avec innerHTML
    // On ajoute un + pour afficher tout les articles, sinon le innerHTML ne reverrait que le dernier article.
    postsContainer.innerHTML += article;
});
