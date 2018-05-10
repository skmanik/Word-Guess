console.log("Testing index.js!");

var Word = require("./Word.js");
var inquirer = require("inquirer");

// word array
var animals = ["dog", "pig", "horse", "snake", "tiger", "duck", "monkey"];

// game function
function runApp() {

    var storedWord = animals[(Math.random() * animals.length) | 0];
    var guessWord = new Word(storedWord);
    var guessRemain = 10;

    // initial display
    guessWord.toString();

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

            // do something
            var test = inquirerResponse.userInput.toLowerCase();

            console.log(test);

        });

    }

}

// initialize game
runApp();