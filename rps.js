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

    if (question == "rock"){
        //return "You lose! Rock beats Scissors";
        return "rock"
    } else if (question == "paper"){
        //return "You lose! Paper beats Rock";
        return "paper"
    } else if (question == "scissors"){
        //return "You lose! Scisscor beats Paper";
        return "scissors"
    } else {
        return "Write Your Answer...";
    }
}


let humanScore = 0;
let computerScore = 0;
// let winner = "rock" > "scissors" || "paper > rock" || "scissors > paper";
let winner = getHumanChoice || getComputerChoice;

function playRound(humanChoice, computerChoice){

    if ("rock" > "scissors"){
        winner++;
    } else if ("scissors" > "paper"){
        winner++;
    } else if ("paper" > "rock"){
        winner++;
    } else {
        return "Tie!";
    }

   
    /* rock > scissors;
    paper > rock;
    scissors > paper; */
    /* if (humanChoice === "rock" && computerChoice === "scissors"){
        // Right now, I'm coding and returning truthful statements without letting the computer know
        // Instead I need to code conditions to let the computer know who won
        humanScore++;
        return "Amazing, Rock beats Scissors!"; 
        
        } else if ( humanChoice === "rock" && computerChoice === "paper"){
        
        computerScore++;
        return "You lose, Paper beats Rock!";
        
        } else if (humanChoice === "rock" && computerChoice === "rock"){
        
        return "So close, it is a tie. Try again!";
        
        } else if (humanChoice === "paper" && computerChoice === "rock"){
        humanScore++;
        return "Amazing, Paper beats Rock!";
        
        } else if ( humanChoice === "paper" && computerChoice === "scissors"){
        computerScore++;
        return "You lose, Scissors beats paper!";
        
        } else if (humanChoice === "paper" && computerChoice === "paper"){
        
        return "So close, it is a tie. Try again!";
        
        } else if (humanChoice === "scissors" && computerChoice === "paper"){
        humanScore++;
        return "Amazing, Scissors beats Paper!";
        
        } else if ( humanChoice === "scissors" && computerChoice === "rock"){
        computerScore++;
        return "You lose, Rock beats Scissors!";
        
        } else if (humanChoice === "scissors" && computerChoice === "scissors"){
        
        return "So close, it is a tie. Try again!";
        
        } else {
        
        return "Write Your Answer";
        
        }
    humanScore++;
    computerScore++; */
    // I feel like I'm telling the code what to do instead of having the code 
    // understand who the round winner actually is
    // my feelings are valid as I'm hardcoding every scenario versus making a dynamic code.

}



const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(getHumanChoice());
console.log(getComputerChoice());
console.log(playRound(humanSelection, computerSelection));


function playGame(i){
    let humanScore = 0;
    let computerScore = 0;
    function playRound(){
 }
    for (i = 0; i <= 5; i++){
      if (humanScore.selected){
        humanScore++;
    } else if (computerScore.selected){
        computerScore++;
    }
 }
}
console.log(humanScore, computerScore);
console.log(playGame(5));
