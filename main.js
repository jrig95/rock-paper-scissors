let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let message = document.getElementById("message");
console.log(message)
const buttons = document.querySelectorAll('.btn');
let resetButton = document.querySelectorAll('#reset');
// reset game
// resetButton.addEventListener('click', () => location.reload());
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
console.log(computerPlay());
// function to play round
function playRound(playerSelection, computerSelection){
  // create logic for the game
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
      rmessage.innerText = "it's a tie!";
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
winningScore = 5;
let playerScore = 0;
let computerScore = 0;

function updateScore(playerScore, computerScore) {
  // const score = document.querySelector('#score');
  let human = document.querySelector('#player-score');
  human.innerText = `Player Score ${playerScore}`
  let computer = document.querySelector('#computer-score');
  computer.innerText = `Computer Score ${computerScore}`
  // score.innerText = `Score ${playerScore} - ${computerScore}`
  // if (playerScore === 5 || computerScore === 5) {
  //   setTimeout(() => finishGame(playerScore, computerScore), 200)
  // }
}


function game(playerChoice){
  // create for loop to loop through

    let playerSelection = playerChoice;
    const computerSelection = computerPlay();
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
