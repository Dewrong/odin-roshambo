console.log("Hello traveller, welcome to Roshambo");


function GetComputerChoice(){
    let computerChoice = Math.floor(Math.random()*3)+1;
    switch (computerChoice){
        case 1: computerChoice = "Rock";
        return computerChoice;
        case 2 : computerChoice = "Paper";
        return computerChoice;
        case 3 : computerChoice = "Scissors";
        return computerChoice;
    }
}

function GetHumanChoice (){
    while(true){
        let humanChoice = prompt("Please type Rock, Paper, or Scissors.")
        switch (humanChoice){
            case "Rock" : 
            case "Paper" : 
            case "Scissors" : 
                return humanChoice;
            default: 
                continue;
        }
    }
    
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    console.log(`Computer Chose: ${computerChoice}`)
    console.log(`You Chose: ${humanChoice}`)
    if(humanChoice == computerChoice){
        console.log("Tie! Go again.")
        return;
    }
    else{
        if((humanChoice  == "Rock" && computerChoice == "Scissors") || (humanChoice  == "Paper" && computerChoice == "Rock") || (humanChoice  == "Scissors" && computerChoice == "Paper")){
            humanScore++;
            console.log("You win this round!");
        }
        else {
            computerScore++;
            console.log("You lost this round!");
        }
    }
}

function playGame(){
    //Play 5 rounds, requires choice and playRound called 5 times in a row
    
    while(humanScore + computerScore < 5){
        let computerChoice = GetComputerChoice();
        let humanChoice = GetHumanChoice();
        playRound(humanChoice, computerChoice);
    }
    console.log(`Final Score: ${humanScore} - ${computerScore}.`)
    if(humanScore > computerScore){
        console.log("You won!")
    }
    else{
        console.log("You lost!")
    }
}

playGame();