var start; // var, let and const??
var lives = 10;
var key;
let correct;
let incorrect;
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
  key = event.key;
  // compare input to hangman word
  checkWord();
  function checkWord() {
    let currentWord = words[0].search(key);
    console.log(currentWord);
    if (currentWord < 0) {
      document.getElementById("incorrect").innerHTML += " " + key;
      lives -= 1;
      document.getElementById("guessLeft").innerHTML = lives;
    } else {
        document.getElementById('correct').innerHTML += " " + key;
    }
  }
}

// if correct
// store letter guessed in variable
// add 1 to score
// add 1 to key counter
// add 1 to guesses correct
// output letter to corresponding portion of the page
// if incorrect
// store letter in guessed variable
// add 1 to key counter
// add 1 to guesses incorrect
// subtract incorrect guesses from total guesses allowed
// as long as total guesses > 0, game continues
// if total guesses = 0, game over
// output letter to corresponding portion of the page
//
