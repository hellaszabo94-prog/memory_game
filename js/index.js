/* array for the pictures */

const picturesAboutPlaces=[
    "egypt.jpg",
    "egypt.jpg",
    "hungary.jpg",
    "hungary.jpg",
    "india.jpg",
    "india.jpg",
    "italy.jpg",
    "italy.jpg",
    "malaysia.jpg",
    "malaysia.jpg",
    "united_kingdom.jpg",
    "united_kingdom.jpg",
    "usa.jpg",
    "usa.jpg",
    "vietnam.jpg",
    "vietnam.jpg"
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