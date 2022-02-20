let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let message = document.getElementById("message");
console.log(message)
const buttons = document.querySelectorAll('.btn');
let resetButton = document.querySelectorAll('#reset');
const humanChoice = document.querySelector("#human-choice");
const computerChoice = document.querySelector("#computer-choice");

// computer function for random play
function computerPlay(){
// computer plays random weapon
const random = Math.random();
if (random < 0.34){
  return "rock"
}
else if (random < 0.67){
  return "scissors"
}
else{
  return "paper"
}
}

// function to play round
function playRound(playerSelection, computerSelection){
  // create logic for the game
  // computerChoice.className = "question";
  if (playerSelection == 'rock') {
    humanChoice.className = 'rock';
    computerChoice.className = computerSelection;
  }
  else if (playerSelection == 'paper') {
    humanChoice.className = 'paper';
    computerChoice.className = computerSelection;
  }
  else if (playerSelection == 'scissors') {
    humanChoice.className = 'scissors';
    computerChoice.className = computerSelection;
  }
  // if (computerSelection == 'rock') {
  //   computerChoice.className = 'rock';
  // }
  // else if (computerSelection == 'paper') {
  //   computerChoice.className = 'paper';
  // }
  // else if (computerSelection == 'scissors') {
  //   computerChoice.className = 'scissors';
  // }

  if (playerSelection === "rock"){
    if (computerSelection === "rock"){
      message.innerText = "it's a tie!";
    }
    else if (computerSelection === "paper"){
      computerScore++;
      message.innerText = "computer wins!";
    }
    else{
      playerScore++;
      message.innerText = "You win! You beat the machine!";
    }
  }

  if (playerSelection === "paper"){
    if (computerSelection === "rock"){
      playerScore++;
      message.innerText = "You win! You beat the machine!";
    }
    else if (computerSelection === "scissors"){
      computerScore++;
      message.innerText = "computer wins!";
    }
    else{
      message.innerText = "it's a tie!";
    }
  }

  if (playerSelection === "scissors"){
    if (computerSelection === "rock"){
      computerScore++;
      message.innerText = "computer wins!";
    }
    else if (computerSelection === "paper"){
      playerScore++;
      message.innerText = "You win! You beat the machine!";
    }
    else {
      message.innerText = "it's a tie!";
    }
  }
}


function disableButtons() {
  buttons.forEach(elem => {
    elem.disabled = true
  })
}
// game function
// set player scores

let playerScore = 0;
let computerScore = 0;

function updateScore(playerScore, computerScore) {
  let human = document.querySelector('#player-score');
  human.innerText = `Player Score: ${playerScore}`
  let computer = document.querySelector('#computer-score');
  computer.innerText = `Computer Score: ${computerScore}`
}


function game(playerChoice){
  // create for loop to loop through
  computerChoice.className="question";
    let playerSelection = playerChoice;
    const computerSelection = computerPlay();
    console.log(computerPlay())
    console.log(playRound(playerSelection, computerSelection));
    console.log("Your score = " + playerScore);
    console.log("Computer's score = " + computerScore)
  if (computerScore === 5 || playerScore === 5) {
    disableButtons();
    console.log("Player win!");

  }
  else if (computerScore === 5 || playerScore === 5){
    disableButtons();
    console.log("computer wins!")

  }
  updateScore(playerScore, computerScore);
  // showChoices(playerSelection, computerSelection);
}
rock.addEventListener('click', () => {
  game("rock");
});
paper.addEventListener('click', () => {
  game("paper");
});
scissors.addEventListener('click', () => {
  game("scissors");
});


game();
