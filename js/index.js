/* Array for the pictures */
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

/* Array for the pictures */

/* Function for mix the cards*/
function mixTheDeck (picturesAboutPlaces){
    /*a for loop for the circle*/
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

let gameDeck = mixTheDeck(picturesAboutPlaces);

console.log("The mixed deck:", gameDeck );
/* Function for mix the cards*/