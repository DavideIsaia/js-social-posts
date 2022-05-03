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
let $All = document.querySelectorAll.bind(document);

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
            name: "Agente Segreto"
        },
        likes: 384,
        created: '2022-05-30'
    },
    {
        id: 4,
        content: "Id veniam expedita delectus. Voluptas incidunt molestias dolorem necessitatibus mollitia dignissimos eum, laboriosam quibusdam aut itaque cumque distinctio praesentium totam, tenetur quos!",
        media: "https://picsum.photos/600/300?random=3",
        author: {
            name: "Piero Angela",
            image: "https://picsum.photos/300?random=4"
        },
        likes: 235,
        created: '2022-04-28'
    },
    {
        id: 5,
        content: "Soluta ipsum voluptatibus, libero non, quibusdam aliquam eligendi facilis sed dolore illo tenetur commodi aspernatur, eveniet tempore unde fugit sit veritatis officiis.",
        media: "https://picsum.photos/600/300?random=5",
        author: {
            name: "Martha Kent",
            image: "https://picsum.photos/300?random=6"
        },
        likes: 699,
        created: '2022-04-25'
    },
];

// prendo le date degli oggetti e le converto nel formato voluto prima di stampare i post in pagina
formatDateIT();

// stampo i post in pagina
generatePost(posts);

// al clic del bottone metto like e incremento/decremento il relativo contatore
let buttons = $All('.like-button');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        // let clicked = this.getAttribute('data-postid');
        // console.log("id button cliccato", clicked);
        let clickedStatus = this.classList.toggle("like-button--liked");
        // console.log("è cliccato?", clickedStatus);
        let likes = posts[i].likes;
        if (clickedStatus === true) {
            likes++;
            // console.log(likes);                        
        }
        // appendo il risultato sul DOM 
        $(`#like-counter-${posts[i].id}`).innerHTML = likes;
    })
}

// -----------------------------------------------------------------
// FUNCTIONS

// genero i post in base ai dati degli oggetti in array
function generatePost(array) {
	array.forEach((element)=> {
        const {id, content, created, media, likes} = element;
        const {image, name} = element.author;
        let post;     
        if (!image) {
            post = `
            <div class="post">
                <div class="post__header">
                    <div class="post-meta">                    
                        <div class="post-meta__icon">
                            <div class="profile-pic"><span>${noProfilePic(element)}</span></div>                 
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
                            <a class="like-button  js-like-button" href="#${id}" data-postid="${id}">
                                <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                                <span class="like-button__label">Mi Piace</span>
                            </a>
                        </div>
                        <div class="likes__counter">
                            Piace a <b id="like-counter-${id}" class="js-likes-counter">${likes}</b> persone
                        </div>
                    </div> 
                </div>            
            </div>
            `;

        } else {
            post = `
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
                            <a class="like-button  js-like-button" href="#${id}" data-postid="${id}">
                                <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                                <span class="like-button__label">Mi Piace</span>
                            </a>
                        </div>
                        <div class="likes__counter">
                            Piace a <b id="like-counter-${id}" class="js-likes-counter">${likes}</b> persone
                        </div>
                    </div> 
                </div>            
            </div>
            `;
        }

		// stampo in html il container con tutti i post aggiunti
		$('#container').innerHTML += post;
	})	
}

//formatto le date dei post in formato italiano (gg/mm/aaaa)
function formatDateIT() {
    for (let i = 0; i < posts.length; i++) {
        let dateArray = posts[i].created.split("-");
        let ItDate = (`${dateArray[2]}/${dateArray[1]}/${dateArray[0]}`);
        posts[i].created = ItDate;
    }
}

//ritorna iniziali autore
function noProfilePic(element) {
    let nameArray = element.author.name.split(" ");
    return nameArray[0][0] + nameArray[nameArray.length - 1][0];
}