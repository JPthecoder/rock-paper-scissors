// Write a code for a getComputerChoice function
//function getComputerChoice(){}
// Randomize the function to get strings: rock, paper, scissors
/* function getComputerChoice(){
    let option = Math.floor(Math.random() *3);
        if (option == "0"){
            return "rock";
    }   else if (option == "1"){
            return "paper";
    }   else if (option == "2"){
            return "scissors";
    }
}
// Test function with console.log
console.log(getComputerChoice());
//Write code for getHumanChoice function
function getHumanChoice(){
//Write code to receive user inputs using prompts
    let input = prompt("Rock, Paper, or Scissors?",'');
    if (input === "rock"){
        return "rock";
}   else if (input === "paper"){
        return "paper";
}   else if (input === "scissors"){
        return "scissors";
}   //else { getHumanChoice();}
}
// Test function with console.log
console.log(getHumanChoice());
// Write two new variables: humanScore and computerScore in global scopr
// Initialize the variable with 0;
let humanScore = 0;
let computerScore = 0;
// Code for logic to play a single round
// Write new function for playRound
// Add two paramaters: humanChoice and computerChoice
function playRound(humanChoice, computerChoice){

// Make humanChoice case-insensitive
humanChoice = humanChoice.toLowerCase();

//Write playRound function to console.log
    if (humanChoice === computerChoice){
        return "Its a tie!";
}   else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")){

        //humanScore++;
        return "Human";
}   else {
        //computerScore++;
        return "Computer"
}

// Increment humanScore or computerScore based on round winner
}
// Create new function called playGame
function playGame(){
// Move playRound and score variable into playGame
    let humanScore = 0;
    let computerScore = 0;
    
    for (let i=0; i<5; i++){
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        // moved humanChoice and computerChoice inside the loop otherwise results are 5-0 or 0-5 since it only pulls one answer
        const winner = playRound(humanChoice,computerChoice);
            if (winner === "Human"){
                humanScore++;
        }   else if (winner === "Computer"){
                computerScore++;
        }
        }
    
//Play 5 rounds of playRound
    if (humanScore > computerScore){
        console.log("Humans are victorius!");
}   else if (computerScore > humanScore){
        console.log("Computer wins wooow");
}   else {
        console.log("Its a tie!");
}
    console.log (`Final Score: Humans - ${humanScore} vs Computer - ${computerScore}`);
}
playGame(); */









function getComputerChoice(){
    let AI = Math.floor(Math.random() * 3);
        if (AI === 0){
            return "rock";
    }   else if (AI === 1){
            return "paper";
    }   else if (AI === 2){
            return "scissors";
    }
}

function getHumanChoice(){
    let answer = prompt("Rock, Paper, or Scissors?",'').toLowerCase();
        if (answer === "rock"){
            return "rock";
    }   else if (answer === "paper"){
            return "paper";
    }   else if (answer === "scissors"){
            return "scissors";
    }
}
console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice){

        if (humanChoice === computerChoice){
            return "It's a tie!";
    }   else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ){
            return "Human wins";
    }   else {
            return "Computer Wins";
    }

}


function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    

    for (i=0; i<5; i++){
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        const winner = playRound(humanChoice, computerChoice);
            if (winner === "Human wins"){
                humanScore++;
        }   else if (winner === "Computer Wins"){
                computerScore++;
        }
    }
        if (computerScore > humanScore){
            console.log("You humans are no match for me!");
    }   else if (humanScore > computerScore){
            console.log("AI is just not that good yet");
    }   else {
            playRound();
    }
        console.log(`Final Score - Humans: ${humanScore}, Computer: ${computerScore}`);
}

playGame();