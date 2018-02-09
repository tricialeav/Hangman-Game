// The only thing I wasn't able to figure out (from testing various scenarios) is how to stop duplicate key presses from interfering with the letters correct counter - if a correct letter is pressed, the game records it and it breaks the sequencing. 
// I also believe that I have set the game up in a way that allows for the hangman word array to be modified (changed, shortened, added to) without losing functionality.

let start;
let lives = 10;
let keyIn;
let prevKeys = [];
let keyCode;
let correct;
let incorrect;
let wordsGuessed = -1;
const words = ["battleship", "yahtzee", "pictionary"];
let currentWord = 0;
let strLength;
let indexVal = [];


// User presses a button to start game

document.getElementById("runGame").addEventListener("click", run);

function run(evt) {
  start = true;
  console.log("Begin Game");
  document.getElementById("guessLeft").innerHTML = lives;

  // On start, game fields replace instrutions and start button

  if (start === true) {
    document.getElementById("topBox").innerHTML = "Correct Guesses:";
    document.getElementById("midBox").innerHTML = "Incorrect Guesses:";
    document.getElementById("lowBox").innerHTML = "Guesses Remaining:";
    document.getElementById("runGame").style.visibility = "hidden";
    document.getElementById("directions").style.visibility = "hidden";
    document.body.addEventListener("keyup", userInput);
  }

// Check to see if key pressed is within alpha range

  function userInput(evt) {
    if (evt.keyCode > 64 && evt.keyCode < 91) {
 
  //  Add key press to array 

      keyIn = evt.key.toLowerCase();
      if (prevKeys.indexOf(keyIn) < 0) {
        prevKeys.push(keyIn);
      } else {
        alert("Oops! Looks like you already guessed " + keyIn);
        lives += 1;
      }

  // Compare input to hangman word

      checkWord();
      function checkWord() {
        let currentLetter = words[currentWord].search(keyIn);
        let strLength = words[currentWord].length;
        
    // If incorrect:

        if (currentLetter < 0 && lives >= 0) {
          if (lives > 0) {
            document.getElementById("incorrect").innerHTML += " " + keyIn;
            lives -= 1;
            document.getElementById("guessLeft").innerHTML = lives;
          }

    // If correct:

        } else {
          printWord(keyIn);

    // If lives = 0:

        }
        if (lives === 0) {
          lose();
        }
      }

// If round is won, check to see if spacebar pressed to start next round

    } else if (evt.keyCode === 32 && wordsGuessed > -1) {
      console.log("next game");
      nextGame();

// If any other keys are pressed:

    } else {
      alert("Please use letter keys");
    }
  }

  // Find index value of duplicate letters & print based on index value of letter array. Check to see if game has been won.

    function printWord(keyIn) {
      let lettersArray = words[currentWord].split('');
      let index = lettersArray.indexOf(keyIn);
      while (index != -1) {
        indexVal.push(index);
        index = lettersArray.indexOf(keyIn, index + 1);
      }
      indexVal.sort()
      document.getElementById("correct").innerHTML = '';
      for (let l = 0; l < indexVal.length; l ++) {
        let output = lettersArray[indexVal[l]] + " ";
        document.getElementById("correct").innerHTML +=
        output;
      } checkWin(indexVal);
    }
  }

  // Functions:

  // After round win, reset counters/displays and start next round with next word:

  function nextGame() {
    lives = 10;
    prevKeys = [];
    indexVal = [];
    document.getElementById("guessLeft").innerHTML = lives;
    document.getElementById("correct").innerHTML = "";
    document.getElementById("incorrect").innerHTML = "";
    document.getElementById("gameWin").innerHTML = "";
    let correct;
    let incorrect;
  }

  // If lives = 0, display message with hangman word and hide display elements:

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

  // Checks to see if all letters have been guessed to move to next round.

function checkWin(indexVal) {
  let strLength = words[currentWord].length;
  if (indexVal.length === strLength && lives >= 1 && currentWord < words.length) {
    wordsGuessed += 1;
    currentWord += 1;
    
    // If round is won, play next round:
    
    if (currentWord < words.length) {
      document.getElementById("gameWin").innerHTML =
        "You won! Press spacebar to play next round.";
    
    // If all three rounds won, win game.
    
    } else if (currentWord === words.length) {
      win();
    }
  }

  // Displays new message and clears boxes upon game win.

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
}
