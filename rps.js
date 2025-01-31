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

console.log(getComputerChoice(2));
console.log(question);