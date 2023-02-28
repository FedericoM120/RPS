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


function playRPS(playerSelection, computerSelection) {
    let str = playerSelection.toLowerCase();
    
    if (str === "rock" && computerSelection === "rock") {
        return "tie"
    }
    if (str === "rock" && computerSelection === "paper") {
        return "You Lose! Paper beats Rock"
        computerScore++
    }
    if (str === "rock" && computerSelection === "scissors") {
        return "You Won! Rock beats scissors"
        playerScore++
    }
    if (str === "paper" && computerSelection === "rock") {
        return "You Won! Paper beats Rock"
        playerScore++
    }
    if (str === "paper" && computerSelection === "paper") {
        return "tie"
    }
    if (str === "paper" && computerSelection === "scissors") {
        return "You Lose! Scissors beats paper"
        computerScore++
    }
    if (str === "scissors" && computerSelection === "rock") {
        return "You Lose! Rock beats scissors"
        computerScore++
    }
    if (str === "scissors" && computerSelection === "paper") {
        return "You Won! scissors beats paper"
        playerScore++
    }
    if (str === "scissors" && computerSelection === "scissors") {
        return "Tie"
    }
}


const rockbtn = document.getElementById('rockButton');
const paperbtn = document.getElementById('paperButton');
const scissorbtn = document.getElementById('scissorButton');

function game() {
    let playerScore = 0;
    let computerScore = 0;
    while (playerScore !== 5 || computerScore !== 5) {
        if (rockbtn.onclick){
            playRPS ("rock", getComputerChoice())
            if (result.startsWith("You Won")) {
                playerScore++
                
            } else if (result.startsWith("You Lose")) {
                computerScore++
               
            }
        }
        if (paperbtn.onclick) {
            playRPS("paper", getComputerChoice())
                if (result.startsWith("You Won")) {
                    playerScore++
                   
                } else if (result.startsWith("You Lose")) {
                    computerScore++
                   
                } 
        }
        if (scissorbtn.onclick) {
            playRPS("scissor", getComputerChoice())
            if (result.startsWith("You Won")) {
                playerScore++
                
            } else if (result.startsWith("You Lose")) {
                computerScore++
                
            } 
        }
    }
    if (playerScore > computerScore){
        return "You won the tournament"
    } else if (computerScore > playerScore){
        return "You lost the tournament"
    } else {
        return "tie"
    }
 }

console.log( game() );

 /*function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let userInput = prompt("Please enter rock paper or scissors")
        let result = playRPS(userInput, getComputerChoice())
        console.log(result)

        if (result.startsWith("You Won")) {
            playerScore++
        } else if (result.startsWith("You Lose")) {
            computerScore++
        }
         
    }

    if (playerScore > computerScore){
        return "You won the tournament"
    } else if (computerScore > playerScore){
        return "You lost the tournament"
    } else {
        return "tie"
    }
 }*/
 
