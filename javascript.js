//Get the computers choice of rock, paper or scissors//
function getComputerChoice(){
    let randomInt = Math.floor(Math.random()*3) + 1;

    let choice = (randomInt == 1) ? 'Rock' :
    (randomInt == 2) ? 'Paper' : 'Scissors';

    return choice;
}

