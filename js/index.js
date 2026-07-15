/* array for the pictures */

const picturesAboutPlaces=[
    "pictures/egypt.jpg",
    "pictures/egypt.jpg",
    "pictures/hungary.jpg",
    "pictures/hungary.jpg",
    "pictures/india.jpg",
    "pictures/india.jpg",
    "pictures/italy.jpg",
    "pictures/italy.jpg",
    "pictures/malaysia.jpg",
    "pictures/malaysia.jpg",
    "pictures/united_kingdom.jpg",
    "pictures/united_kingdom.jpg",
    "pictures/usa.jpg",
    "pictures/usa.jpg",
    "pictures/vietnam.jpg",
    "pictures/vietnam.jpg"
];

console.log("I have " + picturesAboutPlaces.length + " card in the deck." );

/* array for the pictures */

/* function for mix the cards */

function mixTheDeck (picturesAboutPlaces){
    /* a for loop for the circle */
    for (let i = picturesAboutPlaces.length - 1; i > 0 ; i--){
        /*get a random number between 0 and 15*/
        const randomCard = Math.floor(Math.random() * (i + 1));
        /*replace the random number's image with the current 'i's image*/ 
        const temporary = picturesAboutPlaces[i];
        picturesAboutPlaces[i] = picturesAboutPlaces [randomCard];
        picturesAboutPlaces[randomCard] = temporary;
    }
    return picturesAboutPlaces;
}
/* call the function */
let gameDeck = mixTheDeck(picturesAboutPlaces);

console.log("The mixed deck:", gameDeck );

/* function for mix the cards */

/* add cards to the html*/

/* choose the element where I would place the new elements */
const gamePlace = document.querySelector("#gamePlace");

/* functions to add the new cards */

function addTheGameBoard () {

    /* clean the gameplace */
    gamePlace.innerHTML = "";

    /* add every card from the deck */
    gameDeck.forEach(function(pics) {

        /* create a variabel for the new html element */
        const cardHtml= `
                <div class="card">
                    <div class="backSide">
                        <div class="circle right"></div>
                        <div class="circle left"></div>
                        <div class="circle under"></div>
                    </div>
                    <div class="frontSide">
                        <img src="${pics}">
                    </div>
                </div>`;
        
        /* add the new html element to the game place */
        gamePlace.innerHTML+=cardHtml;

    });

}
/* call the function*/
addTheGameBoard();
/* add cards to the html*/

/* change the card sides*/
    
/* choose every card div*/
const cards = document.querySelectorAll(".card");

/* create a function to switch sides by one card*/
cards.forEach(function(oneCard){
    /* add a event listener for a click from the user */
    oneCard.addEventListener('click', function showFrontSide() {
    /*check in colnsole log */
    console.log("click on a card");
    /*choose the backSide class*/
    const disapperBackSide = oneCard.querySelector(".backSide");
    /*add to the element with backSide class extra the upside class */
    disapperBackSide.classList.toggle("upside");
    /*same prozess by frontSide class*/
    const upFrontSide = oneCard.querySelector(".frontSide");

    upFrontSide.classList.toggle("upside");
    }) ;


}) ;


/* change the card sides*/