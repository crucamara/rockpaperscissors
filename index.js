//Computer chooses Rock Paper Scissors randomly
//Player inputs choice
//Computer and Player choices are compared
//Winner is determined based on combinations


const options = ["rock", "paper", "scissors"]

let playerScore = 0
let computerScore = 0

/* Created a function that randomizes the choices from the array above
modified the array by option[placing modification inside these brackets]
Used Math.random which chooses an integer between 0 and 1 (excluding 1) ex. 0.23894 0.12309 etc.
To sort of increase the number of choices to the number of elements in the array, I multiplied it by the ARRAYS LENGTH with .length
The numbers are still coming out with decimals so I used Math.floor to ROUND DOWN the number picked.
logged the variable to the console
 */
function getComputerChoice() {
    let computerChoice = options[Math.floor(Math.random() * options.length)]
    return computerChoice
}

function getPlayerChoice() {
    let message = "rock, paper, or scissors? type your choice below."
    let playerChoice = prompt(message.toLocaleLowerCase)
    return playerChoice
}

function result(getComputerChoice, getPlayerChoice) {
    if (getPlayerChoice == "rock" && getComputerChoice == "scissors" || 
    getPlayerChoice == "paper" && getComputerChoice == "rock" ||
    getPlayerChoice == "scissors" && getComputerChoice == "paper" ) {
        return "Player"
    }
    else if (getComputerChoice == getPlayerChoice) {
        return "Tie"
    }
    else {
        return "Computer"
    }    
    
}

console.log(result(getComputerChoice, getPlayerChoice))