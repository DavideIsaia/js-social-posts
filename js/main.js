// Descrizione**
// Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:

// **Milestone 1** - Creiamo il nostro array di oggetti che rappresentano ciascun post (come da esempio).
// Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
// - id del post, numero progressivo da 1 a n
// - nome autore,
// - foto autore,
// - data in formato americano (mm-gg-yyyy: es 05-03-2022),
// - testo del post,
// - immagine (non tutti i post devono avere una immagine),
// - numero di likes.
// *Non è necessario creare date casuali*
// *Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>)*

// **Milestone 2** - Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.

// **Milestone 3** - Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
// Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.

// ****BONUS**
//  1. Formattare le date in formato italiano (gg/mm/aaaa)
//  2. Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente (es. Olga Demina > OD).
//  3. Al click su un pulsante "Mi Piace" di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.

let $ = document.querySelector.bind(document);

const posts = [
    {
        id: 1,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    media: "https://unsplash.it/600/300?image=171",
        author: {
            name: "Phil Mangione",
            image: "https://unsplash.it/300/300?image=15"
        },
        likes: 80,
        created: '2022-05-03'
    },
    {
        id: 2,
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio excepturi eos ex ipsa, sit nemo magni sapiente quaerat adipisci quas itaque placeat dolor, beatae aperiam voluptatum expedita dolorem, nisi odit.",
        media: "https://picsum.photos/600/300?random=1",
        author: {
            name: "Giuseppe Conte",
            image: "https://picsum.photos/300?random=2"
        },
        likes: 120,
        created: '2022-05-02'
    },
    {
        id: 3,
        content: "Lorem a necessitatibus numquam odit provident harum itaque nam blanditiis illum sed adipisci aliquam dicta accusantium, atque quia aperiam ducimus? Laudantium, molestias suscipit.",
        author: {
            name: "Agente Segreto",
            image: "https://picsum.photos/300?random=3"
        },
        likes: 384,
        created: '2022-05-30'
    },
    {
        id: 4,
        content: "Id veniam expedita delectus. Voluptas incidunt molestias dolorem necessitatibus mollitia dignissimos eum, laboriosam quibusdam aut itaque cumque distinctio praesentium totam, tenetur quos!",
        media: "https://picsum.photos/600/300?random=4",
        author: {
            name: "Piero Angela",
            image: "https://picsum.photos/300?random=5"
        },
        likes: 235,
        created: '2022-04-28'
    },
    {
        id: 5,
        content: "Soluta ipsum voluptatibus, libero non, quibusdam aliquam eligendi facilis sed dolore illo tenetur commodi aspernatur, eveniet tempore unde fugit sit veritatis officiis.",
        media: "https://picsum.photos/600/300?random=6",
        author: {
            name: "Martha Kent",
            image: "https://picsum.photos/300?random=7"
        },
        likes: 699,
        created: '2022-04-25'
    },
];

generatePost(posts);

$('.likes__cta').addEventListener ("click", () => {
    // toggle su like button cambia classe per colorare e incrementa likes +1
})

function generatePost(array) {
	array.forEach((element)=> {
        const {id, content, created, media, likes} = element;
        const {image, name} = element.author;
		let post = `
        <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src=${image} alt=${name}>                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${name}</div>
                        <div class="post-meta__time">${created}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${content}</div>
            <div class="post__image">
                <img src=${media} alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="${id}">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${likes}</b> persone
                    </div>
                </div> 
            </div>            
        </div>
		`;

		// stampo in html il container con tutte i post aggiunti
		$('#container').innerHTML += post;
	})	
}