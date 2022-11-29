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
    paraComputerChoice.textContent = computerChoice;
    paraResult.textContent = result;
  })
}





