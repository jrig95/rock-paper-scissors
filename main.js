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
  if (playerSelection === "rock"){
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

  if (playerSelection === "paper"){
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

  if (playerSelection === "scissors"){
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
winningScore = 5;
let playerScore = 0;
let computerScore = 0;

function game(playerChoice){
  // create for loop to loop through

    let playerSelection = playerChoice;
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
    console.log(playerSelection);
    console.log("Your score = " + playerScore);
    console.log("Computer's score = " + computerScore)
  if (playerScore === winningScore) {
    console.log("Player win!")
  }
  else if (computerScore === winningScore){
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



// const message = document.querySelector('.message');
// const score = document.querySelector('.score');
// const buttons = document.querySelectorAll('button');
// const winnerScores = [0, 0];

// //add event listeners to buttons
// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener('click', playGame);
// }

// function playGame(e) {
//   //setup player's selection
//   let playerSelection = e.target.innerText;
//   //setup a random number to select for computer
//   //selects a number between 0 and 1 (1 not-inclusive)
//   let computerSelection = Math.random();

//   //if computerSelection is less than .34, computer selects Rock
//   if (computerSelection < .34) {
//     computerSelection = 'Rock';
//   } else if (computerSelection <= .67) {
//     computerSelection = 'Paper';
//   } else {
//     computerSelection = 'Scissors';
//   }

//   //setup a function to compare winners and return result
//   let result = checkWinner(playerSelection, computerSelection);

//   //output scores to the DOM
//   if (result === 'Player') {
//     result += ' wins!';
//     //update score
//     winnerScores[0]++;
//   }

//   if (result === 'Computer') {
//     result += ' wins!';
//     winnerScores[1]++;
//   }

//   if (result === 'Draw') {
//     result += '. It\'s a tie!'
//   }

//   //output score into Score DIV
//   score.innerHTML = 'Player: [ ' + winnerScores[0] + ' ] Computer: [ ' + winnerScores[1] + ' ]';

//   //output player and computer's selections
//   messenger('Player: <strong>' + playerSelection + '</strong> Computer: <strong>' + computerSelection + '</strong><br>' + result);
// }

// function messenger(selectionMessage) {
//   message.innerHTML = selectionMessage;
// }

// function checkWinner(player, computer) {
//   if (player === computer) {
//     return 'Draw';
//   }

//   if (player === 'Rock') {
//     if (computer === 'Paper') {
//       return 'Computer';
//     } else {
//       return 'Player';
//     }
//   }

//   if (player === 'Paper') {
//     if (computer === 'Scissors') {
//       return 'Computer';
//     } else {
//       return 'Player';
//     }
//   }

//   if (player === 'Scissors') {
//     if (computer === 'Rock') {
//       return 'Computer';
//     } else {
//       return 'Player';
//     }
//   }
// }
