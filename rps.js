let game = Math.floor(Math.random() * 3);

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
function getHumanChoice(){
 //  value humanChoice.toLowerCase === computerChoice.toLowerCase;

    if (question == "Rock"){
        return "You lose! Rock beats Scissors";
    } else if (question == "Paper"){
        return "You lose! Paper beats Rock";
    } else if (question == "Scisscor"){
        return "You lose! Scisscor beats Paper";
    } else {
        return "Write Your Answer...";
    }
}

const humanScore = 0;
const computerScore = 0;

function playRound(humanChoice, computerChoice){
    if (humanChoice == "Rock" && )
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();


console.log(playRound(humanSelection, computerSelection));
console.log(getComputerChoice(2));
console.log(question);
console.log(playRound(Rock));