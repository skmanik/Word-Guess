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

        var array = this.letters;
        var string = "";

        for (var i = 0; i < array.length; i++) {
            
            string = string + array[i].toString();

        }

        return string;

    }

    // check entire word with checkLetter function
    checkWord(character) {

        var array = this.letters;

        for (var i = 0; i < array.length; i++) {
            
            array[i].checkLetter(character);

        }

        console.log(array);

    }    

}

module.exports = Word;