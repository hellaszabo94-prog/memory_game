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
       
    for (let i = picturesAboutPlaces.length - 1; i > 0 ; i--){
      
        const randomCard = Math.floor(Math.random() * (i + 1));
         
        const temporary = picturesAboutPlaces[i];
        picturesAboutPlaces[i] = picturesAboutPlaces [randomCard];
        picturesAboutPlaces[randomCard] = temporary;
    }
    return picturesAboutPlaces;
}

let gameDeck = mixTheDeck(picturesAboutPlaces);

console.log("The mixed deck:", gameDeck );

/* function for mix the cards */


/* add cards to the html*/


const gamePlace = document.querySelector("#gamePlace");

//functions to add the new cards

function addTheGameBoard () {

    //clean the gameplace
    gamePlace.innerHTML = "";

    //add every card from the deck
    gameDeck.forEach(function(pics) {

        
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
        
        
        gamePlace.innerHTML+=cardHtml;

    });

}

addTheGameBoard();

/* add cards to the html*/


/* change the card sides, check that they are same or not, lock the table meanwhile two cards show the front side*/


let firstCard = null;
let secondCard = null;
 
let lock = false;

let foundpairs = 0;

const maxpairs = picturesAboutPlaces.length / 2;

const cards = document.querySelectorAll(".card");

//create a function to switch sides by one card
cards.forEach(function(oneCard){

    oneCard.addEventListener('click', function showFrontSide() {
    
        console.log("click on a card");

        if (lock === true) return;
        
        const disapperBackSide = oneCard.querySelector(".backSide");
        
        disapperBackSide.classList.toggle("upside");
        
        const upFrontSide = oneCard.querySelector(".frontSide");

        upFrontSide.classList.toggle("upside");
        
        //add oneCard value to global variabels
        if (firstCard === null) {
            
            firstCard = oneCard;
             
            console.log("save the first card");

            } else if (secondCard === null && oneCard !== firstCard) {
        
            secondCard = oneCard;
            
            console.log("save the second card");
               
            const firstPicsRoot = firstCard.querySelector("img").src; 
            const secondPicsRoot = secondCard.querySelector("img").src;

            //check values are the same or not
            if (firstPicsRoot === secondPicsRoot){
                console.log("they are same");
               
                firstCard.style.pointerEvents="none";
                secondCard.style.pointerEvents="none";

                
                foundpairs++;

                
                firstCard = null ;
                secondCard = null ;

                // if user win get a message and can start a new game
                if (foundpairs === maxpairs){

                    function winMessageAndNewGame(){

                        const newgame = confirm("Congrats, you won! :) To start a new game, click OK.");
                        
                        if(newgame){location.reload();}
                    }
                    setTimeout(winMessageAndNewGame, 500)
            }

        } else{

            console.log("they are not same");

            //lock the table if pics are not same

            lock = true;
            //turn cards back if they aren't same
            function removeupside(){
                
                firstCard.querySelector(".backSide").classList.remove("upside");
                firstCard.querySelector(".frontSide").classList.remove("upside");

                secondCard.querySelector(".backSide").classList.remove("upside");
                secondCard.querySelector(".frontSide").classList.remove("upside");
               
                firstCard = null ;
                secondCard = null ;
                //open the table for the next turn
                lock = false
            }
            setTimeout(removeupside, 1000);
         }

    }
    }) ;

}) ;
/* change the card sides, check that they are same or not, lock the table meanwhile two cards show the front side*/
