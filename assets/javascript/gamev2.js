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
    if (start === true) {
        document.getElementById("topBox").innerHTML = "Correct Guesses:";
        document.getElementById("midBox").innerHTML = "Incorrect Guesses:";
        document.getElementById("lowBox").innerHTML = "Guesses Remaining:";
        document.getElementById("runGame").style.visibility = "hidden";
        document.getElementById("directions").style.visibility = "hidden";
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
        if (
          guessRight === strLength &&
          lives >= 1 &&
          currentWord < words.length
        ) {
          // Correct Letter
           document.getElementById("correct").innerHTML += " " + keyIn;
          // printWord(keyIn);
          wordsGuessed += 1;
          currentWord += 1;
          // win round
          if (currentWord < words.length) {
          document.getElementById("gameWin").innerHTML =
            "You won! Press spacebar to play next round.";
          } 
          // win game
          else {
            win();
          }
        } else {
          printWord(keyIn);
        }
      }
      if (lives === 0) {
        lose();
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
    lives = 10;
    document.getElementById("guessLeft").innerHTML = lives;
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
  
  function lose() {
    document.getElementById("topBox").innerHTML =
      "The word was " + words[currentWord];
    document.getElementById("midBox").innerHTML = "Better luck next time!";
    document.getElementById("lowBox").style.visibility = "hidden";
    document.getElementById("runGame").style.visibility = "hidden";
    document.getElementById("guessLeft").style.visibility = "hidden";
    document.getElementById("correct").style.visibility = "hidden";
    document.getElementById("incorrect").style.visibility = "hidden";
    document.getElementById("gameWin").style.visibility = "hidden";
  }
  
  // Find index value of duplicate letters & print
  function printWord(keyIn) {
    let pushWord = words[currentWord];
    let addPosition = [];
    for (let i = 0; i <= pushWord.length; i++) {
      if (pushWord[i] === keyIn) addPosition.push(i);
    }
  
    if (addPosition.length > 1) {
      guessRight += addPosition.length;
      for (let j = 0; j < addPosition.length; j++) {
        let newPosition = addPosition[j];
        document.getElementById("correct").innerHTML += " " + pushWord[newPosition];
      }
    } else {
      guessRight += addPosition.length;
      document.getElementById("correct").innerHTML += " " + pushWord[addPosition];
    }
  }
}