var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wordBank = ["apple", "honey", "horse","superman","airplane"];//Total words used 
var guessed = [];
var testWord = wordBank[2];
blankWord();

function blankWord() {//This will create a blank word.
    var dispWord = ["_"];
    for(var i = 0; i < (testWord.length - 1); i++){
        dispWord.push("_");
    }
    var blank = document.getElementById('game');
    blank.innerText = dispWord;
}



document.addEventListener("keydown", function(event) {
    var letter = event.keyCode - 65;
    var gCount = textWord.length+5;// Number of guess that will be provided for the user.

    if(letter >=0 && letter<=25){
      var elem = document.getElementById('dead');
      guessed.push(alphabet[letter]);
      var deadLetters = guessed.join("");
      elem.innerText = deadLetters;
    }
  });



// var elem = document.getElementById('inputText');
// elem.addEventListener('keypress', function(e){
//   if (e.keyCode == 13) {
//     console.log('You pressed a "enter" key in somewhere');   
//   }
// });