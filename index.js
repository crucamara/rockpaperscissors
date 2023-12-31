//Computer chooses Rock Paper Scissors randomly
//Player inputs choice
//Computer and Player choices are compared
//Winner is determined based on combinations
//Steps 1-4 are looped 5x
//results are recorded and scores incremented


const options = ["rock", "paper", "scissors"]
let message = "rock, paper, or scissors? type your choice below."
let playerScore = 0
let computerScore = 0


function getPlayerChoice() {
    let playerChoice = prompt(message)
    console.log(playerChoice)
    return playerChoice
}


/* Created a function that randomizes the choices from the array above
modified the array by option[placing modification inside these brackets]
Used Math.random which chooses an integer between 0 and 1 (excluding 1) ex. 0.23894 0.12309 etc.
To sort of increase the number of choices to the number of elements in the array, I multiplied it by the ARRAYS LENGTH with .length
The numbers are still coming out with decimals so I used Math.floor to ROUND DOWN the number picked.
logged the variable to the console
 */
function getComputerChoice() {
    let computerChoice = options[Math.floor(Math.random() * options.length)]
   if (getPlayerChoice) {
    console.log(computerChoice)
    return computerChoice
   }
}



function result(computerChoice, playerChoice) {

    if (computerChoice == playerChoice) {
        return "Tie"

    }
    else if (playerChoice == "rock" && computerChoice == "scissors" || 
    playerChoice == "paper" && computerChoice == "rock" ||
    playerChoice == "scissors" && computerChoice == "paper" ) {
        
        return playerScore++, "Player"
    }
    else {
        
        return computerScore++, "Computer"
    }    
   
    
    
}



/* Result getting mixed up between if else statements
Computer win coming out if Player wins, etc
Fix tomorrow! */

function round() {
    let computerChoice = getComputerChoice()
    let playerChoice = getPlayerChoice()
    console.log(result(computerChoice, playerChoice))
    console.log(playerScore, computerScore)
    return result(computerChoice, playerChoice)
     
    
}



function game(i) {

    for (let i = 1; i < 6; i++) {
        round(i)      
    }
}

game()
