console.log("Testing Letter.js!");

// creates letter
class Letter {

    constructor(letter) {
        this.letter = letter;
        this.guess = false;
    }

    // display
    toString() {

        if (this.guess) {

            return this.letter;

        } else {

            return "_";

        }

    }

    // letter comparison
    checkLetter(character) {

        if (character === this.letter) {

            console.log("CORRECT.");
            this.guess = true;

        } else {

            console.log("INCORRECT.");
            this.guess = false;

        }

    }

}

module.exports = Letter;