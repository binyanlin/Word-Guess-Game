<script>
// psuedo code: marvel universe theme

// variables
// var for wins
var wins = 0;
// var for array of marvel words 
var mahvel = ["cryostasis", "cyborg", "dendrotoxin", "gravitonium", "hadron", "neodynium", "palladium", "singularity", "spoiler", "vibranium", "thanos", "danvers", "bucky", "groot", "valyrie"];
// var array of letters already picked
var guesses = [];
// var for counting amount of tries left 
var triesLeft = 15;
// var for current word
var currentWord;
// var for user guess
var userGuess;
// var for word displayed
var wordDisplay = [];
// var for guess log
var guessLog = [];



//variables for HTML elements 
var $wins = document.getElementById("wins");
var $wordDisplay = document.getElementById("display");
var $comment = document.getElementById("comment");


// computer picks a word, displays _ _ _ _ on screen
    var currentWord = mahvel[Math.floor(Math.random()*mahvel.length)];
    var wordDisplayMaker = function() {
        for (var i=0; i<currentWord.length; i++) {
            if (currentWord.charAt(i) )
            wordDisplay.push("_ ");
        }
    }
    wordDisplayMaker(currentWord.length);
    $wordDisplay.textContent = wordDisplay;

// creating the win condition: if some point all letters in currentWord are guessed, display "you win!""



    

// person picks a letter onkeyup
    document.onkeyup = function(event) {
    var userGuess = event.key;

    //computer checks that it is a letter 
    var isLetter = function(c) {
        return c.toLowerCase() != c.toUpperCase();
    }
        //if letter, computer checks if it is in word
        if (isLetter(userGuess)) {

            //success: denotes that the letter exists within the word AND the letter is not in the array of the current word
            if (currentWord.indexOf(userGuess) > -1 && guessLog.indexOf === -1) {
                //show that user guess is correct and update the correct blank with the letter
            

            }
            //failure: counts down attempts left and checks for loss condition
            else {
                triesLeft = triesLeft -1;
                // creating the lose condition: if some point triesLeft === 0, display "you lose"
                if (triesLeft === 0) {
                    $comment.textContent = "You lose noob";
                }
            }
        }
        else {
            $comment.textContent = "please input a letter, mortal"
        }
    }



// if not in word, computer counts down guesses remaining and displays word in list
// if no blank spaces remaining, display you win 
// if no guesses remaining, display you lose 
// reset everything except wins 
</script>
