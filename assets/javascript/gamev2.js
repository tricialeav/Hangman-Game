
let start;
// let lives = 10;
// let key;
// let correct;
// let incorrect;
// let guessRight = 0;
// let wordsGuessed = 0;
// const words = ["battleship", "yahtzee", "pictionary"];
// let currentWord = 0;

// user presses a button to start game

document.getElementById("runGame").addEventListener("click", run);

function run(evt) {
  start = true;
  console.log("Begin Game");
  document.getElementById("guessLeft").innerHTML = lives;

  // user presses key to guess a letter

//   if (start === true) {
//     document.body.addEventListener("keyup", userInput);
//   }
// }

// function userInput(evt) {
//   key = evt.key.toLowerCase();
//   // compare input to hangman word
//   checkWord();
//   function checkWord() {
//     let currentLetter = words[currentWord].search(key);
//     let strLength = words[currentWord].length;
//     console.log(currentLetter);
//     //    if wrong
//     if (currentLetter < 0 && guessRight < strLength && lives > 1) {
//       document.getElementById("incorrect").innerHTML += " " + key;
//       lives -= 1;
//       document.getElementById("guessLeft").innerHTML = lives;
//       //    if right
//     } else if (currentLetter >= 0 && guessRight < strLength && lives >= 1) {
//       guessRight += 1;
//       if (guessRight == strLength && lives >= 1) {
//         document.getElementById("correct").innerHTML += " " + key;
//         wordsGuessed += 1;
//         currentWord += 1;
//         document.getElementById("gameWin").innerHTML =
//           "You won! Press spacebar to play next round.";
//       } else {
//         document.getElementById("correct").innerHTML += " " + key;
//       }
//     } else {
//       document.getElementById("guessLeft").innerHTML = 0;
//       document.getElementById("gameLose").innerHTML = "Game Over!";
//     }
//   } 
// }