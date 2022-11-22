// function that randomly returns rock, paper or scissors
// create an array of options
// generate a random number
// pick an option out of the array = the word at random index

//Ask user for an input - choose either a paper, a rock or a scissors
let playerSelection = prompt("Please enter a value between rock, paper or scissors").toLowerCase();
//Check whether the user's input is only one of the allowed values, otherwise print error
if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors'){

  //Make a computer choice 
  function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    let randomIndex = Math.floor(Math.random() * choices.length); 
    
    return choices[randomIndex];
  }

  //Assing the computer choice to the variable
  let computerSelection = getComputerChoice();

  //Play a round of the game
  function playRound(playerSelection, computerSelection){

  //Take the two values and compare them
  if (playerSelection === computerSelection){
    return `Tie`;
  }

  else if (playerSelection === 'rock' && computerSelection === 'paper'){
    return `Lose`;
  }

  else if (playerSelection === 'rock' && computerSelection === 'scissors'){
    return `Win`;
  }

  else if (playerSelection === 'paper' && computerSelection === 'rock'){
    return `Win`;
  }

  else if (playerSelection === 'paper' && computerSelection === 'scissors'){
    return `Lose`;
  }

  else if (playerSelection === 'scissors' && computerSelection === 'paper'){
    return `Win`;
  }

  else if (playerSelection === 'scissors' && computerSelection === 'rock'){
    return `Lose`;
  }

  }
  
}
else {
  console.error(`The value you've entered is not allowed`);
}

//play a 5 round game
function game(){
  let roundResult;
  for(let i = 1; i <= 5; i++){
    computerSelection = getComputerChoice();
    console.log(`Player: ${playerSelection} PC: ${computerSelection}`);
    roundResult = playRound(playerSelection, computerSelection);
    console.log(roundResult);
  }
}
game();