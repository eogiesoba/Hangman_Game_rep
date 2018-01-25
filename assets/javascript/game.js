var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wordBank = ["apple", "honey", "horse", "superman", "airplane"];//Total words used 
var guessed = [];//Array of letters guessed.
var gCount = 0;//Number of guess user has done.
var winCount = 0;
var loseCount = 0;
var rand = Math.floor(Math.random() * 5);// Random number generator withing wordBank range.
var testWord = wordBank[rand];
var remGuess = testWord.length + 5;
var dispWord = ["_"];


blankWord();

function blankWord() {//This will create a blank word.
    for (var i = 0; i < (testWord.length - 1); i++) {
        dispWord.push("_");
    }
    var blank = document.getElementById('game');
    blank.innerText = dispWord;
}



document.addEventListener("keydown", function (event) {
    var letter = event.keyCode - 65;
    var gMax = testWord.length + 5;// Number of guess that will be provided for the user.
    if (letter >= 0 && letter <= 25 && gCount < gMax) {
        guessed.push(alphabet[letter]);
        var deadLetters = guessed.join("");
        document.getElementById('dead').innerText = deadLetters;
        remGuess--;
        gCount++;
        document.getElementById('guess').innerText = remGuess;

        for (a = 0; a < dispWord.length; a++) {
            if (alphabet[letter] === testWord[a]){
                dispWord[a] = testWord[a];//Note test word is not an array it is just a string
            }
            document.getElementById('game').innerText = dispWord;
        }
        if (dispWord.join("") === testWord) {//Rest the Game during a WIN.
            gCount = 0;
            winCount++;
            document.getElementById('win').innerText = winCount;
            rand = Math.floor(Math.random() * 5);// Random number generator withing wordBank range.
            testWord = wordBank[rand];
            guessed = [];
            deadLetters = guessed.join("");
            document.getElementById('dead').innerText = deadLetters;
            remGuess = testWord.length + 5;
            document.getElementById('guess').innerText = remGuess;
            dispWord = ["_"];
            blankWord();
        }
    }
    else if (gCount >= gMax){//Reset the code during a LOSS.
        gCount = 0;
        loseCount++;
        document.getElementById('lose').innerText = loseCount;
        rand = Math.floor(Math.random() * 5);// Random number generator withing wordBank range.
        testWord = wordBank[rand];
        guessed = [];
        deadLetters = guessed.join("");
        document.getElementById('dead').innerText = deadLetters;
        remGuess = testWord.length + 5;
        document.getElementById('guess').innerText = remGuess;
        dispWord = ["_"];
        blankWord();
    }
});
