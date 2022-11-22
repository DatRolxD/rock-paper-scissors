// function that randomly returns rock, paper or scissors
// create an array of options
// generate a random number
// pick an option out of the array = the word at random index

//Ask user for an input - choose either a paper, a rock or a scissors
let playerSelection = prompt("Please enter a value between rock, paper or scissors").toLowerCase();
//Check whether the user's input is only one of the allowed values, otherwise print error
if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors'){

  //Make a computer pick 
  function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    let randomIndex = Math.floor(Math.random() * choices.length); 
    
    return choices[randomIndex];
  }

  let computerChoice = getComputerChoice();

  console.log(`${playerSelection} ${computerChoice}`);
  if (playerSelection === computerChoice){
    console.log(`Tie`);
  }

  else if (playerSelection === 'rock' && computerChoice === 'paper'){
    console.log(`Lose`);
  }

  else if (playerSelection === 'rock' && computerChoice === 'scissors'){
    console.log(`Win`);
  }

  else if (playerSelection === 'paper' && computerChoice === 'rock'){
    console.log(`Win`);
  }

  else if (playerSelection === 'paper' && computerChoice === 'scissors'){
    console.log(`Lose`);
  }

  else if (playerSelection === 'scissors' && computerChoice === 'paper'){
    console.log(`Win`);
  }

  else if (playerSelection === 'scissors' && computerChoice === 'rock'){
    console.log(`Lose`);
  }
  
}
else {
  console.error(`The value you've entered is not allowed`);
}