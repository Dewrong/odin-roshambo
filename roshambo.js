

window.addEventListener("DOMContentLoaded", (event) => {
    const button1 = document.querySelector("#rock");
    const button2 = document.querySelector("#paper");
    const button3 = document.querySelector("#scissors");

    button1.addEventListener('click', function (){playRound("Rock")});
    button2.addEventListener('click', function (){playRound("Paper")});
    button3.addEventListener('click', function (){playRound("Scissors")} );
});


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

function playRound(humanChoice){

    const scores = document.querySelector(".messages");
    scores.innerHTML = '';
    
    let computerChoice = GetComputerChoice();
    
    const computerResult = document.createElement("p");
    computerResult.textContent = `Computer Chose: ${computerChoice}`;
    const humanResult = document.createElement("p");
    humanResult.textContent = `You Chose: ${humanChoice}`;

    const roundResult = document.createElement("p");

    if(humanChoice == computerChoice){
        roundResult.textContent = "Tie! Go again.";        
    }
    else{
        if((humanChoice  == "Rock" && computerChoice == "Scissors") || (humanChoice  == "Paper" && computerChoice == "Rock") || (humanChoice  == "Scissors" && computerChoice == "Paper")){
            humanScore++;
            roundResult.textContent = "You win this round!";
        }
        else {
            computerScore++;
            roundResult.textContent = "You lost this round!";
        }
    }

    const appendMessage = document.querySelector(".messages");
    appendMessage.appendChild(computerResult);
    appendMessage.appendChild(humanResult);
    appendMessage.appendChild(roundResult);

    const gameResult = document.createElement("p");

    const currentScore = document.createElement("p");
    if(humanScore + computerScore == 5){
        currentScore.textContent = `Final Score: ${humanScore} - ${computerScore}.`;
        if(humanScore > computerScore){
            gameResult.textContent = "You won!";
        }
        else{
            gameResult.textContent = "You lost!";
        }
        appendMessage.appendChild(currentScore);
        appendMessage.appendChild(gameResult);
    }
    else{
        currentScore.textContent = `Current Score: ${humanScore} - ${computerScore}`;
        appendMessage.appendChild(currentScore);

    }

}

// function playGame(){
//     //Play 5 rounds, requires choice and playRound called 5 times in a row
    
//     while(){
//         //let humanChoice = GetHumanChoice();
//         playRound(humanChoice);
//     }
//     console.log(`Final Score: ${humanScore} - ${computerScore}.`)
//     if(humanScore > computerScore){
//         console.log("You won!")
//     }
//     else{
//         console.log("You lost!")
//     }
// }

//playGame();