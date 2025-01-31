let game = Math.floor(Math.random() * 3);

const humanScore = 0;
const computerScore = 0;

function getComputerChoice(){
    if (game === 0){
        return "rock";
    } else if (game === 1){
        return "paper";
    } else if (game === 2){
        return "scissors";
    } else {
        return "Take a proper guess";
    }
}

let question = prompt("Choose Rock, Paper, or Scissors", '');

function playRound(humanChoice, computerChoice){
 //  value humanChoice.toLowerCase === computerChoice.toLowerCase;

    if (humanChoice == "Rock"){
        return "You lose! Rock beats Scissors";
    } else if (humanChoice == "Paper"){
        return "You lose! Paper beats Rock";
    } else if (humanChoice == "Scisscor"){
        return "You lose! Scisscor beats Paper";
    } else {
        return "Write Your Answer...";
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();


playRound(humanSelection, computerSelection);
console.log(getComputerChoice(2));
console.log(question);
console.log(playRound(Rock));