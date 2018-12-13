

//array of letters used for game
var abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//sets initial state of game for wins, losses, guesses, and the program pick
var programPick;
var wins = 0;
var losses = 0;
var guesses = 5;

//program randomly picks a letter from the letter array
programPick = abc[Math.floor(abc.length * Math.random())];
console.log(programPick);

//function to capture user input and run against program
document.onkeyup = function(event) {
  
  //captures key pressed on keyboard
  var userKey = event.key;
  console.log(userKey);

  // program alerts user if key pressed is not a letter
  if(!abc.includes(userKey)){
    console.log(userKey + " is not a letter!");
  }
  // if user guesses letter righ then player gets point and game resets
  else if(userKey === programPick){
    console.log("Oh you guessed right!");
    wins++;
    guesses = 5;
    programPick = abc[Math.floor(abc.length * Math.random())]; 
    console.log(programPick);
  }
  // if user guesses letter wrong then player losses a guess until 
  else{
    console.log("Wrong!");
    guesses = guesses - 1;
    console.log(guesses);

    if(guesses === 0){
      console.log("You lose!");
      guesses = 5;
      programPick = abc[Math.floor(abc.length * Math.random())]; 
      console.log(programPick);
    }
  }
}

