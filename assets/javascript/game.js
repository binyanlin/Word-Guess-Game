

// variables
// var for wins
var wins = 0;
// var for array of marvel words 
var mahvel = ["cryostasis", "cyborg", "dendrotoxin", "gravitonium", "hadron", "neodynium", "palladium", "singularity", "spoiler", "vibranium", "thanos", "danvers", "bucky", "groot", "valkyrie"];
// var for testing, switch the two names for debugging
var mahvel2 = ["bear", "cat", "squid", "donkey"];
// var array of letters already picked
var guesses = [];
// var for counting amount of tries left 
var triesLeft = 15;
// var for target word
var targetWord;
// var for user guess
var userGuess;
// var for word displayed
var wordDisplay = [];
// var for guess log
var guessLog = [];
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var $wins = document.getElementById("wins");
var $wordDisplay = document.getElementById("display");
var $comment = document.getElementById("comment");
var $input = document.getElementById("input");
var $guessDisplay = document.getElementById("guessDisplay");
var $triesLeft = document.getElementById("triesLeft")

//computer checks that it is a letter 
var isLetter = function(c) {
    return c.length === 1 && (c.toLowerCase() != c.toUpperCase()); 
}
//function for resetting the game to the start 
var gameLoop = function() {
    targetWord = mahvel[Math.floor(Math.random()*mahvel.length)]
    guessLog = [];
    guesses = [];
    triesLeft = 15;
    $guessDisplay.textContent = "";
    $comment.textContent = "";
    updateText();
    // Need a way to reassign the onkeyup function after game end so it doesn't keep looping in gameLoop
    document.onkeyup = function(event) {
    var userGuess = event.key;
    //if the guess is a letter
    if (isLetter(userGuess)) {
        $input.textContent = userGuess;
        // if not guessed before 
        if (guesses.indexOf(userGuess) < 0) {
            // add their guess to list of guesses
            guesses.push(userGuess);
            // decrease tries left by 1
            if (!guessIsCorrect(userGuess)) {
                triesLeft--;
                updateText();
            }
            updateText();
        }
        updateText();
    }
    checkGameEnd();
    }
}
// checks tries left and game ending conditions
var checkGameEnd = function() {
    if (triesLeft === 0) {
        $comment.textContent = "You lose! Press any letter to try again.";
        updateText();
        document.onkeyup = function(event) {
            gameLoop();
        }
    }
    else if (wordDisplay.indexOf("_ ") === -1) {
        $comment.textContent = "You win! Press any letter to try again.";
        wins++;
        updateText();
        document.onkeyup = function(event) {
            gameLoop();
        }
    }
}
//displays all the previous guesses, non repeating
var displayGuesses = function() {
    for (var i = 0; i < alphabet.length; i++) {
        $guessDisplay.textContent = guesses;
    }
}
//update all text function
var updateText = function() {
    wordDisplayMaker();
    displayGuesses();
    $triesLeft.textContent = triesLeft;
    $wins.textContent = wins;
}
//function for checking if the guess is part of the currently selected word
var guessIsCorrect = function(c) {
    if (targetWord.indexOf(c) > -1) {
        return true;
    }
    else {
        return false;
    }
}
// game start conditions: maybe a press any button option?
// computer picks a word, displays _ _ _ _ on screen
var targetWord = mahvel[Math.floor(Math.random()*mahvel.length)];
var wordDisplayMaker = function() {
    wordDisplay = [];
    for (var i = 0; i<targetWord.length; i++) {
        var targetCharacter = targetWord.charAt(i);
        if (guesses.indexOf(targetCharacter) > -1) {
            wordDisplay.push(targetCharacter);
        }
        else {
            wordDisplay.push("_ ");
        }
    }
    $wordDisplay.textContent = wordDisplay.join(" ");
}
// prints out display of how many letters in the target word

updateText();

// event that happens when a key is pressed
document.onkeyup = function(event) {
    var userGuess = event.key;
    //if the guess is a letter
    if (isLetter(userGuess)) {
        $input.textContent = userGuess;
        // if not guessed before 
        if (guesses.indexOf(userGuess) < 0) {
            // add their guess to list of guesses
            guesses.push(userGuess);
            // decrease tries left by 1
            if (!guessIsCorrect(userGuess)) {
                triesLeft--;
                updateText();
            }
            updateText();
        }
        updateText();
    }
    checkGameEnd();
}
