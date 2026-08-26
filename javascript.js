//Get the computers choice of rock, paper or scissors//
function getComputerChoice(){
    let randomInt = Math.floor(Math.random()*3);

    let choice = (randomInt == 0) ? 'Rock' :
    (randomInt == 1) ? 'Paper' : 'Scissors';

    return choice;
}

//Get the user's choice of rock, paper or scissors
function getHumanChoice(){
let userInput = prompt ("Rock, Paper or Scissors?", '');

    let firstLetter = userInput.charAt(0);
    let capitalized = firstLetter.toUpperCase();
    let stringBody = userInput.substring(1);
    let stringNormal= stringBody.toLowerCase();
    let newString = capitalized+stringNormal
    return newString;

}

