console.log("Testing Word.js!");

var Letter = require("./Letter.js");

// creates word
class Word {

    constructor(word) {

        this.letters = [];

        // loops through word string, makes new letter object from each character in the string and pushes into array
        for (var i = 0; i < word.length; i++) {
            
            var c = word.charAt(i);
            var letter = new Letter(c);

            this.letters.push(letter);

        }

    }

    // return string representing the word
    toString() {

        // console.log("TEST!");

        var array = this.letters;
        var string = "";

        for (var i = 0; i < array.length; i++) {
            
            string = string + array[i].toString();

        }

        // return string;
        console.log(string);

    }

    // A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)
    checkWord(character) {

        // console.log("Test Check Word!");

        var array = this.letters;

        for (var i = 0; i < array.length; i++) {
            
            array[i].checkLetter(character);

        }

    }    

}

// var word = new Word("Hello");

// word.checkWord("H");
// word.toString();

module.exports = Word;