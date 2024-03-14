 // Make a function called getComputerChoice
 function getComputerChoice() {
 // Array with the 3 choices
    const compChoice = ["Rock","Paper","Scissors"];
 // Generate a random number between 0 and the length of the array and floor it(3)
    const randomPick = Math.floor(Math.random() * compChoice.length );
 // return the result
    return compChoice[randomPick];
 }
  // Test the function
  console.log(getComputerChoice());
