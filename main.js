let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors")
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
  if (playerSelection.toLowerCase() === "rock"){
    if (computerSelection === "rock"){
      return "it's a tie!";
    }
    else if (computerSelection === "paper"){
      computerScore++;
      return "computer wins!";
    }
    else{
      playerScore++;
      return "You win! You beat the machine!";
    }
  }

  if (playerSelection.toLowerCase() === "paper"){
    if (computerSelection === "rock"){
      playerScore++;
      return "You win! You beat the machine!";
    }
    else if (computerSelection === "scissors"){
      computerScore++;
      return "computer wins!";
    }
    else{
      return "it's a tie!";
    }
  }

  if (playerSelection.toLowerCase() === "scissors"){
    if (computerSelection === "rock"){
      computerScore++;
      return "computer wins!";
    }
    else if (computerSelection === "paper"){
      playerScore++;
      return "You win! You beat the machine!";
    }
    else {
      return "it's a tie!";
    }
  }
}
// game function
// set player scores
let winningScore = 5;
let playerScore = 0;
let computerScore = 0;

function game(playerChoice){
  // create for loop to loop through
  while (winningScore < 5 ){
    winningScore++;
    console.log(winningScore);
    let playerSelection = playerChoice;
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
    console.log("Your score = " + playerScore);
    console.log("Computer's score = " + computerScore)
  }
  if (playerScore > computerScore) {
    console.log("Player win!")
  }
  else {
    console.log("computer wins!")
  }
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
