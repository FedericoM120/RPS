function getComputerChoice() {
    let min = 1
    let max = 3
    let randomInt = Math.floor(Math.random() * (max - min + 1)) + min

    if (randomInt === 1){
        return "rock"
    } else if (randomInt === 2) {
        return "paper"
    } else {
        return "scissors"
    }
}

let playerScore = 0;
let computerScore = 0;



const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', function() {
        if ((playerScore <= 4) && (computerScore <= 4)) {
            if (button.id === 'rockButton') {
                let result = playRPS("rock", getComputerChoice());
                if (result.startsWith("You Won")) {
                  playerScore++;
                  document.getElementById("userScore").innerHTML = "Player score: " + playerScore;
                  console.log(playerScore);
              } else if (result.startsWith("You Lose")) {
                  computerScore++;
                  document.getElementById("compScore").innerHTML = "Computer score: " + computerScore;
                  console.log(computerScore);
                  }
              }

              if (button.id === 'paperButton') {
                let result = playRPS("paper", getComputerChoice());
                if (result.startsWith("You Won")) {
                  playerScore++;
                  document.getElementById("userScore").innerHTML = "Player score: " + playerScore;
                  console.log(playerScore);
              } else if (result.startsWith("You Lose")) {
                  computerScore++;
                  document.getElementById("compScore").innerHTML = "Computer score: " + computerScore;
                  console.log(computerScore);
                  }
              }

              if (button.id === 'scissorButton') {
                let result = playRPS("scissors", getComputerChoice());
                if (result.startsWith("You Won")) {
                  playerScore++;
                  document.getElementById("userScore").innerHTML = "Player score: " + playerScore;
                  console.log(playerScore);
              } else if (result.startsWith("You Lose")) {
                  computerScore++;
                  document.getElementById("compScore").innerHTML = "Computer score: " + computerScore;
                  console.log(computerScore);
                  }
              }
        }
    });
  });


function playRPS(playerSelection, computerSelection) {
    let str = playerSelection.toLowerCase();
    
    if (str === "rock" && computerSelection === "rock") {
        return "tie"
    }
    if (str === "rock" && computerSelection === "paper") {
        return "You Lose! Paper beats Rock"
    }
    if (str === "rock" && computerSelection === "scissors") {
        return "You Won! Rock beats scissors"
    }
    if (str === "paper" && computerSelection === "rock") {
        return "You Won! Paper beats Rock"
    }
    if (str === "paper" && computerSelection === "paper") {
        return "tie"
    }
    if (str === "paper" && computerSelection === "scissors") {
        return "You Lose! Scissors beats paper"
    }
    if (str === "scissors" && computerSelection === "rock") {
        return "You Lose! Rock beats scissors"
    }
    if (str === "scissors" && computerSelection === "paper") {
        return "You Won! scissors beats paper"
    }
    if (str === "scissors" && computerSelection === "scissors") {
        return "Tie"
    }
}

 
