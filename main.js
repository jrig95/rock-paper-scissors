
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

let playerScore = 0;
let computerScore = 0;

function game(){
  // create for loop to loop through
  for (let i = 0; i < 5; i++ ){
    let playerSelection = prompt("Pick rock, paper or scissors");
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
    console.log("Your score = " + playerScore);
    console.log("Computer's score = " + computerScore)
  }


  // set computerSelection = computerPlay
  // create playerSelection prompt
  // console playround
  // console your score
  // console computer score

}

game();
