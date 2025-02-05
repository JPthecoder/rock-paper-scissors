/* //let game = Math.floor(Math.random() * 3);

function getComputerChoice(){
    let game = Math.floor(Math.random() * 3);

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

let question = prompt("Choose Rock, Paper, or Scissors", '').toLowerCase();
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
function playRound(humanChoice, computerChoice){



   /* if ("rock" > "scissors"){
        winner++;
    } else if ("scissors" > "paper"){
        winner++;
    } else if ("paper" > "rock"){
        winner++;
    } else {
        return "Tie!";
    } */

   
    /* rock > scissors;
    paper > rock;
    scissors > paper;
    if (humanChoice === "rock" && computerChoice === "scissors"){
        // Right now, I'm coding and returning truthful statements without letting the computer know
        // Instead I need to code conditions to let the computer know who won
        //humanScore++;
        return "Human";
        //winner = humanChoice;
        //return ""Amazing, Rock beats Scissors!";" 
        
        } else if ( humanChoice === "rock" && computerChoice === "paper"){
        
        //computerScore++;
        return "Computer";
        //winner = computerChoice;

        //return "You lose, Paper beats Rock!";
        
        } else if (humanChoice === "rock" && computerChoice === "rock"){
        
        //return "So close, it is a tie. Try again!";
        
        } else if (humanChoice === "paper" && computerChoice === "rock"){
        //humanScore++;
        return "Human";
        //winner = humanChoice;
        //return "Amazing, Paper beats Rock!";
        
        } else if ( humanChoice === "paper" && computerChoice === "scissors"){
        //computerScore++;
        return "Computer";
        //winner = computerChoice;

        //return "You lose, Scissors beats paper!";
        
        } else if (humanChoice === "paper" && computerChoice === "paper"){
        
        //return "So close, it is a tie. Try again!";
        
        } else if (humanChoice === "scissors" && computerChoice === "paper"){
        //humanScore++;
        return "Human";
        //winner = humanChoice;
        //return "Amazing, Scissors beats Paper!";
        
        } else if ( humanChoice === "scissors" && computerChoice === "rock"){
        //computerScore++;
        return "Computer";
        //winner = computerChoice;

        //return "You lose, Rock beats Scissors!";
        
        } else if (humanChoice === "scissors" && computerChoice === "scissors"){
        
        //return "So close, it is a tie. Try again!";
        
        } else {
        
        //return "Write Your Answer";
        
        }
    humanScore++;
    computerScore++;
    // I feel like I'm telling the code what to do instead of having the code 
    // understand who the round winner actually is
    // my feelings are valid as I'm hardcoding every scenario versus making a dynamic code.

}



const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(getHumanChoice());
console.log(getComputerChoice());
console.log(playRound(humanSelection, computerSelection));

let winner;

function playGame(){
    for (i = 0; i < 5; i++){
        playRound();
    }
 
    if (playRound("Human")){
        humanScore++;
    } else if (playRound("Computer")){
        computerScore++;
    }
}


console.log(humanScore, computerScore);
console.log(playRound()); */

/* -----------------------*/

function getComputerChoice(){
    let choice = Math.floor(Math.random()*3);
        if (choice === 0){
            return "rock";
    }   else if (choice === 1){
            return "paper";
    }   else if (choice === 2){
            return "scissors";
    }   else {
            return "Invalid answer, guess again";
    }
}
//    console.log(getComputerChoice());

function getHumanChoice(){
    let answer = prompt("Rock, Paper, or Scissors?",'');
        if (answer == "rock"){
                return "rock";
    }   else if (answer == "paper"){
                return "paper";
    }   else if (answer == "scissors"){
                return "scissors";
    }   else {
                return "Invalid answer, guess again";
    }
}
//  console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
        if (humanChoice === computerChoice){
            return "Its a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ){
        return "Human";
    } else {
        return "Computer";
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
console.log(humanSelection, computerSelection);

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++){
        const humanChoice = getHumanChoice().toLowerCase();
        const computerChoice = getComputerChoice();

        const winner = playRound(humanChoice, computerChoice);
            if (winner == "Human"){
                humanScore++;
        }   else if (winner == "Computer"){
                computerScore++;
        

        }
    }

    if (humanScore > computerScore){
        console.log("Human wins the game!");
}   else if (computerScore > humanScore){
        console.log("Computer Wins the game!");
}   else {
        console.log("Its a tie!");
}
console.log(`Final Score - Human: ${humanScore}, Computer: ${computerScore}`);
}

playGame();
//for (i = 0; i < 5; i++){}