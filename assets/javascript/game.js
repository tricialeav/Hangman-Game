// To figure out:
// var, let and const - when is best to use each one?
// add timeout to key press
// set up letters in order for correct guesses (forEach?)
// display and disable duplicate letters
// how to move to next word if all correct

var start;
var lives = 10;
var key;
let correct;
let incorrect;
let guessRight = 0;
let wordsGuessed = 0;
const words = ["cabbage", "burrito", "cookies"];

// user presses a button to start game

document.getElementById("runGame").addEventListener("click", run);

function run(evt) {
  start = true;
  console.log("Begin Game");
  document.getElementById("guessLeft").innerHTML = lives;

  // user presses key to guess a letter
 
  if (start === true) {
    document.body.addEventListener("keyup", userInput);
  }
}


  function userInput(evt) {
    key = event.key.toLowerCase();
    // compare input to hangman word
    checkWord();
    function checkWord() {
      let currentLetter = words[0].search(key);
      let strLength = words[0].length;
      console.log(currentLetter);
      //    if wrong
      if (currentLetter < 0 && guessRight < strLength && lives > 1) {
        document.getElementById("incorrect").innerHTML += " " + key;
        lives -= 1;
        document.getElementById("guessLeft").innerHTML = lives;
        //    if right
      } else if (currentLetter >= 0 && guessRight < strLength && lives > 1) {
        guessRight += 1;
        if (guessRight == strLength && lives > 1) {
          document.getElementById("correct").innerHTML += " " + key;
          wordsGuessed += 1;
          document.getElementById("gameWin").innerHTML =
            "You won! Press spacebar to play next round.";
        } else {
          document.getElementById("correct").innerHTML += " " + key;
        }
      } else {
        document.getElementById("guessLeft").innerHTML = 0;
        document.getElementById("gameLose").innerHTML = "Game Over!";
      }
    }
  }

