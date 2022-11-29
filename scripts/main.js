//add event listener to all buttons
//on click => save the id to a value
let btns = document.querySelectorAll('#opt-container>button');
btns = [...btns];
let userInput = '';

const listOfChoices = ['rock', 'paper', 'scissors'];
let computerChoice = '';

const displayResult = document.querySelector('#display-result');
const paraComputerChoice = document.createElement('p');
paraComputerChoice.classList.add('computer-choice');
const paraResult = document.createElement('p');
paraResult.classList.add('result');

const userLivesDiv = document.querySelector('#user-lives');
const computerLivesDiv = document.querySelector('#computer-lives');
const death = document.querySelector('#death');
let userLives = 5; 
let computerLives = 5; 

displayResult.appendChild(paraComputerChoice);
displayResult.appendChild(paraResult);

for (let i = 0; i < btns.length; i++){
  btns[i].addEventListener('click', function(){
    userInput = btns[i].getAttribute('id');
    computerChoice = listOfChoices[Math.floor(Math.random() * listOfChoices.length)];
    console.log(userInput, computerChoice);

    let result = '';
    if (userInput === computerChoice){
      result = 'A tie';
      console.log('A tie');
    }

    else if (userInput === 'rock' && computerChoice === 'paper' ||
            userInput === 'paper' && computerChoice === 'scissors' ||
            userInput === 'scissors' && computerChoice === 'rock'
    ){
      result = `You've lost`;
      console.log(`You've lost`);
    }
    else{
      result = `You've won`;
      console.log(`You've won`);
    }
    paraComputerChoice.textContent = `User: ${userInput} PC: ${computerChoice}`;
    paraResult.textContent = result;

    if (userLives > 0 && computerLives > 0){
      if (result === `You've won`){
        computerLives--;
        computerLivesDiv.textContent = `Your lives: ${computerLives}`;
      }
      else if (result === `You've lost`) {
        userLives--;
        userLivesDiv.textContent = `Your lives: ${userLives}`;
      }
    }
    else if (userLives = 0){
      death.textContent = `You died`;
    }

    else {
      death.textContent = `PC died`;
    }
  })
}





