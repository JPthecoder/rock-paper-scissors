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
    let option = Math.floor(Math.random() *3);
        if (option == "0"){
            return "rock";
    }   else if (option == "1"){
            return "paper";
    }   else if (option == "2"){
            return "scissors";
    }
}

console.log(getComputerChoice());

function getHumanChoice(){
    let choice = prompt("Rock, Paper, or Scissors?", '').toLowerCase();
        if (choice === "rock"){
            return "rock";
    }   else if (choice === "paper"){
            return "paper";
    }   else if (choice === "scissors"){
            return "scissors";
    }
}

console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    // the results of this game will always have a tie and either computer or human winning
    // we want to declare the constant first just in case there is a mix up when both var equals the same option
        if (humanChoice === computerChoice){
            return "AI can't beat you right now, its a tie!";
    }   else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
    ){
            return "Humans"
    }   else {
            return "Computer"
    }
}
/*
function playGame(){
    let humanScore = 0;
    let computerScore = 0;


    for (i=0; i<1; i++){
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        const winner = playRound(humanChoice, computerChoice);
                if (humanChoice > computerChoice){
                    humanScore++;
            }   else if (computerChoice > humanChoice){
                    computerScore++;
            }
        }

    if (humanScore > computerScore){
        console.log("Humans are the superiror race!");
}   else if (computerScore > humanScore){
        console.log("AI are catching up to humanity");
}

    console.log(`Final Results: Humans won ${humanScore} times, Computer won ${computerScore} times`);
}

playGame();
*/
const container = document.querySelector("#container");

const rock = document.createElement("button");
rock.setAttribute('id', 'btn');
rock.textContent = "Rock";
rock.value = "rock";

container.appendChild(rock);

const paper = document.createElement("button");
paper.setAttribute('id', 'btn');
paper.value = "paper";
paper.textContent = "Paper";

container.appendChild(paper);

const scissor = document.createElement("button");
scissor.setAttribute('id', 'btn');
scissor.textContent = "Scissor";
scissor.value = "scissor"

container.appendChild(scissor);

function playSelection(){
rock.addEventListener("click", ()=>{
        rock.value === "rock";
        console.log(rock.value);
});

paper.addEventListener("click", ()=>{
        paper.value === "paper";
        console.log (paper.value);
});

scissor.addEventListener("click", ()=>{
        scissor.value === "scissor";
        console.log (scissor.value);
});

};

playSelection();


// I'm thinking because my button doesn't correlate an actual answer
// The button display the value but the backend doesn't have the value connected so button rock doesn't connect to rock
