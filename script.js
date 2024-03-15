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
const win = ("You win this round!")
const lose = ("You lose this round!")
const tie = ("That's a tie!")
const falseInput = ("Wtf?? You have to pick Rock, Paper or Scissors to play!")

/* Create a function playRound that asks for the players input,
   compares it to the computers choice and determines the outcome of the round.
*/
function playRound() {
   // get playerSelect and compSelect and alert it
   let playerSelect = prompt("Type rock paper or scissors to play!").toLowerCase();
   let compSelect = getComputerChoice().toLowerCase();
   alert("The computer picked " + compSelect)
   // check for a tie and alert if so
   if (playerSelect === compSelect) {
     alert(tie)
   }  
   
   // run if player selects rock
   else if (playerSelect === "rock") {
        if (compSelect === "scissors") {
           alert(win)
        } else if (compSelect === "paper") {
           alert(lose)
        } 
   } 

   // run if player picks scissors
   else if (playerSelect === "scissors") {
      switch (compSelect) {
         case "paper":
            alert(win)
            break
         case "rock":
            alert(lose)
            break
      }
   }

   // run if player picks paper
   else if (playerSelect === "paper") {
      switch (compSelect) {
         case "rock":
            alert(win)
            break
         case "scissors":
            alert(lose)
            break
      }
   }
   
   
}

playRound();
