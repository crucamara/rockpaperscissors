//Computer chooses Rock Paper Scissors randomly
//Player inputs choice
//Computer and Player choices are compared
//Winner is determined based on combinations


const options = ["rock", "paper", "scissors"]
message = "rock, paper, or scissors? type your choice below."


function getComputerChoice() {
    let computerChoice = options[Math.floor(Math.random() * options.length)]
    console.log(computerChoice)
    return computerChoice
}


function getPlayerChoice() {
    let playerChoice = prompt(message)
    console.log(playerChoice)
    return playerChoice
}

function playRound(playerChoice, computerChoice) {

    if(playerChoice == "rock" && computerChoice == "scissors" || 
    playerChoice == "paper" && computerChoice == "rock" ||
    playerChoice == "scissors" && computerChoice == "rock") {
        return "You win!"
    }
    else if(playerChoice === computerChoice) {
        return "It's a tie!"

    }
    else {
        return "You lose!"
    }
}

let playerChoice = getPlayerChoice()
let computerChoice = getComputerChoice()
console.log(playRound(playerChoice, computerChoice))