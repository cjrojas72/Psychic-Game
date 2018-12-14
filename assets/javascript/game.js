

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
    alert(`${userKey} is not a letter`);
  }
  // if user guesses letter righ then player gets point and game resets
  else if(userKey === programPick){
    console.log("Oh you guessed right!");
    wins++;
    guesses = 5;

    
    document.getElementById("wins-div").innerHTML = "Wins: " + wins; 

    
    programPick = abc[Math.floor(abc.length * Math.random())]; 
    console.log("program chose: " + programPick);
  }
  // if user guesses letter wrong then player losses a guess until 
  else{
    
    var letters = document.createTextNode(`${userKey},`);
    console.log("Wrong!");
    guesses = guesses - 1;
    document.getElementById("guesses-div").appendChild(letters);

    document.getElementById("guesses-left").innerHTML = "Guesses Left: " + guesses; 
    console.log(guesses);

    if(guesses === 0){
    
      console.log("You lose!");
      losses++;
      
      document.getElementById("losses-div").innerHTML = "Losses: " + losses; 
      
      alert("Game over. Try Again?");
      guesses = 5;
      document.getElementById("guesses-left").innerHTML = "Guesses Left: " + guesses; 
      document.getElementById("guesses-div").innerHTML = "You Guessed: ";
      programPick = abc[Math.floor(abc.length * Math.random())]; 
      console.log("program chose: " + programPick);
    }
  }
}

