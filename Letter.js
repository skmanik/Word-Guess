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

        if (this.guess) {

            return;

        }

        if (character === this.letter) {

            this.guess = true;

        } else {

            this.guess = false;

        }

    }

}

module.exports = Letter;