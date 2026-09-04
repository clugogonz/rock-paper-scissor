
function playGame(){
//player score variables//
let humanScore = 0; 
let computerScore = 0; 

//Get the computers choice of rock, paper or scissors//
    function getComputerChoice(){
    let randomInt = Math.floor(Math.random()*3);

    let choice = (randomInt == 0) ? 'Rock' :
    (randomInt == 1) ? 'Paper' : 'Scissors';

    return choice;
    }

//Get the user's choice of rock, paper or scissors//
    function getHumanChoice(){
    let userInput = prompt ("Rock, Paper or Scissors?", '');
    let firstLetter = userInput.charAt(0);
    let capitalized = firstLetter.toUpperCase();
    let stringBody = userInput.substring(1);
    let stringNormal= stringBody.toLowerCase();
    let newString = capitalized+stringNormal
    return newString;
    }

//game logic//
function playRound() {

    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    if (humanChoice == computerChoice) {
        alert(`It's a draw! You both chose ${humanChoice}.`);
    }
    else if (humanChoice == "Scissors" && computerChoice == "Paper" 
     || humanChoice == "Rock" && computerChoice == "Scissors" 
     || humanChoice == "Paper" && computerChoice == "Rock"){++humanScore ; 
         alert(`You win! ${humanChoice} beats ${computerChoice}.`);
     }
     else {
        ++computerScore;
        alert(`You lose! ${humanChoice} loses to ${computerChoice}.`);
     }
}

playRound();
playRound();
playRound();
playRound();
playRound();
}

