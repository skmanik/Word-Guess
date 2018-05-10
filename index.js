console.log("Testing index.js!");

var Word = require("./Word.js");
var inquirer = require("inquirer");

// word array
var animals = ["dog", "monkey"];

// game function
function runApp() {

    var storedWord = animals[(Math.random() * animals.length) | 0];
    var guessWord = new Word(storedWord);
    var guessRemain = 10;

    // initial display
    console.log(guessWord.toString());

    // initial prompt
    askQuestion();

    function askQuestion() {

        inquirer.prompt([
            {
                type: "input",
                name: "userInput",
                message: "Guess a letter from A-Z and hit enter!"
            }
        ]).then(function (inquirerResponse) {

            // take only one letter and make sure it's lowercased
            var substring = inquirerResponse.userInput.substr(0, 1);
            var formatLetter = substring.toLowerCase();

            console.log("You guessed: " + formatLetter);

            // now compare with letters of word
            guessWord.checkWord(formatLetter);

            // display
            console.log(guessWord.toString());

            if (guessWord.toString().includes(formatLetter)) {

                console.log("Correct! Remaining guesses: " + guessRemain);

            } else {

                guessRemain--; 
                console.log("Incorrect! Remaining guesses: " + guessRemain);

            }

            if (guessRemain > 0) {

                askQuestion();

            } else {

                console.log("Game over, bub.");

            }

        });

    }

}

// initialize game
runApp();