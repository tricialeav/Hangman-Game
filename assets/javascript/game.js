// To figure out:
// add timeout to key press
// set up letters in order for correct guesses (forEach?)
// display and disable duplicate letters

let start;
let lives = 10;
let keyIn;
let keyCode;
let correct;
let incorrect;
let guessRight = 0;
let wordsGuessed = -1;
const words = ["battleship", "yahtzee", "pictionary"];
let currentWord = 0;

// user presses a button to start game

document.getElementById("runGame").addEventListener("click", run);

function run(evt) {
  start = true;
  console.log("Begin Game");
  document.getElementById("guessLeft").innerHTML = lives;

  // user presses key to guess a letter

  if (start === true) {
    document.getElementById("topBox").innerHTML = "Correct Guesses:";
    document.getElementById("midBox").innerHTML = "Incorrect Guesses:";
    document.getElementById("lowBox").innerHTML = "Guesses Remaining:";
    document.getElementById("runGame").style.visibility = "hidden";
    document.body.addEventListener("keyup", userInput);
  }
}

function userInput(evt) {
  if (evt.keyCode > 64 && evt.keyCode < 91) {
    keyIn = evt.key.toLowerCase();
    console.log(keyIn);
    // compare input to hangman word
    checkWord();
    function checkWord() {
      let currentLetter = words[currentWord].search(keyIn);
      let strLength = words[currentWord].length;
      console.log(currentLetter);
      //    if wrong
      if (currentLetter < 0 && guessRight < strLength && lives >= 0) {
        if (lives > 0) {
          document.getElementById("incorrect").innerHTML += " " + keyIn;
          lives -= 1;
          document.getElementById("guessLeft").innerHTML = lives;
        }
        //    if right
      } else if (currentLetter >= 0 && guessRight < strLength && lives >= 1) {
        guessRight += 1;
        if (
          guessRight === strLength &&
          lives >= 1 &&
          currentWord < words.length
        ) {
          document.getElementById("correct").innerHTML += " " + keyIn;
          wordsGuessed += 1;
          currentWord += 1;
          if (currentWord < words.length) {
          document.getElementById("gameWin").innerHTML =
            "You won! Press spacebar to play next round.";
          } else {
            win();
          }
        } else {
          document.getElementById("correct").innerHTML += " " + keyIn;
        }
      }
      if (lives === 0) {
        document.getElementById("gameLose").innerHTML = "Game Over!";
      }
    }
  } else if (evt.keyCode === 32 && wordsGuessed > -1) {
    console.log("next game");
    nextGame();
  } else {
    alert("Please use letter keys");
  }
}

function nextGame() {
  let lives = 10;
  document.getElementById("correct").innerHTML = "";
  document.getElementById("incorrect").innerHTML = "";
  document.getElementById("gameWin").innerHTML = "";
  let correct;
  let incorrect;
  guessRight = 0;
}

function win() {
    document.getElementById("topBox").innerHTML = "Thanks for Playing!";
    document.getElementById("midBox").style.visibility = "hidden";
    document.getElementById("lowBox").style.visibility = "hidden";
    document.getElementById("runGame").style.visibility = "hidden";
    document.getElementById("guessLeft").style.visibility = "hidden";
    document.getElementById("correct").style.visibility = "hidden";
    document.getElementById("incorrect").style.visibility = "hidden";
    document.getElementById("gameWin").style.visibility = "hidden";

  }

