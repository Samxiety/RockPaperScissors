// Make a function called getComputerChoice
 function getComputerChoice() {
 // Array with the 3 choices
    const compChoice = ["Rock","Paper","Scissors"];
 // Generate a random number between 0 and the length of the array and floor it(3)
    const randomPick = Math.floor(Math.random() * compChoice.length );
 // return the result
    return compChoice[randomPick];
 }
// Declare a message variable for every outcome
const winRound = "You win this round!"
const loseRound = "You lose this round!"
const tieRound = "That's a tie!"
const falseInput = "?? You have to pick Rock, Paper or Scissors to play!"
const winGame = "Congratulations, you win the game!"
const loseGame = "I'm sorry, but you lost this game :("
const tieGame = "It looks like the game is a tie!"

/* 
   Create a function playGame() that asks if you want to play the game
   if ok start playRound, else cancel and alert "You don't want to play? Ok, bye"
   Use a while loop.
   Count the result of each game and console.log it. 
   If cancel game console.log game result.
*/

function playGame() {
   let playAgainLoop = true;
   let countResult = 0;

   while (playAgainLoop === true) {
      let askForPlay = "Do you want to play a round of Rock, Paper, Scissors?"
      let cancelGame = "You don't want to play? Bye then :)"
      if (confirm(askForPlay)) {
         let outcome = playRound()
         if (outcome === winRound) {
            countResult += 1;
            console.log("win")
         } else if (outcome === loseRound) {
            countResult -= 1;
            console.log("lose");
         } else if (outcome === tieRound) {
            console.log("tie");
         } else if (outcome === falseInput) {
            console.log(" - ");
         }
      } else {
         alert(cancelGame);
         playAgainLoop = false;
         if (countResult > 0) {
            console.log(winGame);
         } else if (countResult < 0) {
            console.log(loseGame)
         } else {
            console.log(tieGame)
         }
      }
}
}

function playRound() {
   // get playerSelect and compSelect and alert it
   let playerSelect = prompt("Type rock paper or scissors to play!").toLowerCase();
   let compSelect = getComputerChoice().toLowerCase();
   alert("The computer picked " + compSelect)
   // check for a tie and alert if so
   if (playerSelect === compSelect) {
      alert(tieRound)
      return tieRound
   }  
   
   // run if player selects rock
   else if (playerSelect === "rock") {
        if (compSelect === "scissors") {
            alert(winRound)
            return winRound
        } else if (compSelect === "paper") {
            alert(loseRound)
            return loseRound
        } 
   } 

   // run if player picks scissors
   else if (playerSelect === "scissors") {
      switch (compSelect) {
         case "paper":
            alert(winRound)
            return winRound 
         case "rock":
            alert(loseRound)
            return loseRound
      }
   }

   // run if player picks paper
   else if (playerSelect === "paper") {
      switch (compSelect) {
         case "rock":
            alert(winRound)
            return winRound
         case "scissors":
            alert(loseRound)
            return loseRound
      }
   }
   // run if player gives an invalid input
   else {
      alert(falseInput)
   }
   
}

playGame();
