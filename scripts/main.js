// function that randomly returns rock, paper or scissors
// create an array of options
// generate a random number
// pick an option out of the array = the word at random index
let playerSelection = prompt("Please enter a value between rock, paper or scissors").toLowerCase();
if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors'){

  function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    let randomIndex = Math.floor(Math.random() * choices.length); 
    
    return choices[randomIndex]
  }

  let computerChoice = getComputerChoice();

  switch(playerSelection, computerChoice){
    case playerSelection === computerChoice:
      console.log(`It's a tie`);
      break;
    case playerSelection === 'rock':
      switch(computerChoice){
        case 'paper':
          console.log(`LOSE`);
          break;
        case 'scissors':
          console.log(`WIN`);
      }
      break;
    case playerSelection === 'scissors':
      switch(computerChoice){
        case 'rock':
          console.log(`LOSE`);
          break;
        case 'paper':
          console.log(`WIN`);
      };
      break;
      
      case playerSelection === 'paper':
      switch(computerChoice){
        case 'scissors':
          console.log(`LOSE`);
          break;
        case 'rock':
          console.log(`WIN`);
      };
      break;
  }
}
else {
  console.log(`The value you've entered is not allowed`);
}