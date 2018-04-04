
let startGame;
let lives = 10;
let keyPressed;
let prevKeysPressed = [];
let keyCode;
let correct;
let incorrect;
let wordsGuessed = -1;
const words = ["battleship", "yahtzee", "pictionary"];
let currentWord = 0;
let strLength;
let indexVal = [];


document.getElementById("runGame").addEventListener("click", run);

function run(evt) {
  startGame = true;
  console.log("Begin Game");
  document.getElementById("guessLeft").innerHTML = lives;

  if (startGame === true) {
    document.getElementById("topBox").innerHTML = "Correct Guesses:";
    document.getElementById("midBox").innerHTML = "Incorrect Guesses:";
    document.getElementById("lowBox").innerHTML = "Guesses Remaining:";
    document.getElementById("runGame").style.visibility = "hidden";
    document.getElementById("directions").style.visibility = "hidden";
    document.body.addEventListener("keyup", userInput);
  }


  function userInput(evt) {
    if (evt.keyCode > 64 && evt.keyCode < 91) {
 

      keyPressed = evt.key.toLowerCase();
      if (prevKeysPressed.indexOf(keyPressed) < 0) {
        prevKeysPressed.push(keyPressed);
      } else {
        alert("Oops! Looks like you already guessed " + keyPressed);
        lives += 1;
      }

      checkWord();
      function checkWord() {
        let currentLetter = words[currentWord].search(keyPressed);
        let strLength = words[currentWord].length;
      

        if (currentLetter < 0 && lives >= 0) {
          if (lives > 0) {
            document.getElementById("incorrect").innerHTML += " " + keyPressed;
            lives -= 1;
            document.getElementById("guessLeft").innerHTML = lives;
          }

        } else {
          printWord(keyPressed);

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

    function printWord(keyPressed) {
      let lettersArray = words[currentWord].split('');
      let index = lettersArray.indexOf(keyPressed);
      while (index != -1) {
        indexVal.push(index);
        index = lettersArray.indexOf(keyPressed, index + 1);
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

  function nextGame() {
    lives = 10;
    prevKeysPressed = [];
    indexVal = [];
    document.getElementById("guessLeft").innerHTML = lives;
    document.getElementById("correct").innerHTML = "";
    document.getElementById("incorrect").innerHTML = "";
    document.getElementById("gameWin").innerHTML = "";
    let correct;
    let incorrect;
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

function checkWin(indexVal) {
  let strLength = words[currentWord].length;
  if (indexVal.length === strLength && lives >= 1 && currentWord < words.length) {
    wordsGuessed += 1;
    currentWord += 1;
    
    if (currentWord < words.length) {
      document.getElementById("gameWin").innerHTML =
        "You won! Press spacebar to play next round.";
    
    } else if (currentWord === words.length) {
      win();
    }
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
}
