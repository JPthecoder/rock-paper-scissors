function getComputerChoice(){
    let option = Math.floor(Math.random() *3);
        if (option == "0"){
            return "rock";
    }   else if (option == "1"){
            return "paper";
    }   else if (option == "2"){
            return "scissors";
    }
};

//console.log(getComputerChoice());

const container = document.querySelector("#container");
container.setAttribute("id", "container");


const rock = document.createElement("button");
rock.setAttribute('id', 'btn');
rock.value = "rock";
rock.textContent = "Rock";


container.appendChild(rock);

const paper = document.createElement("button");
paper.setAttribute('id', 'btn');
paper.value = "paper";
paper.textContent = "Paper";

container.appendChild(paper);

const scissor = document.createElement("button");
scissor.setAttribute('id', 'btn');
scissor.value = "scissor";
scissor.textContent = "Scissor";


container.appendChild(scissor);

/*
container.addEventListener("click", (e) => {
        let target = e.target;

        switch(target.id){
                case 'rock':
                        console.log("Dwayne's name is Rock");
                        break;
                case 'paper':
                        console.log("Paper is light");
                        break;
                case 'scissor':
                        console.log("Strong and sturdy cuz I'm scissor");
                        break;
        }
});
*/
//I made the event delegation to store my choice
//How can I use this delegation and container as the single event handler
//To incorporate it into a function to play the game;


/* function getHumanChoice(){
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
*/
let humanScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerChoice){
    // the results of this game will always have a tie and either computer or human winning
    // we want to declare the constant first just in case there is a mix up when both var equals the same option
        if (playerSelection === computerChoice){
            console.log( "AI can't beat you right now, its a tie!");
    }   else if (
            (playerSelection === "rock" && computerChoice === "scissors") ||
            (playerSelection === "paper" && computerChoice === "rock") ||
            (playerSelection === "scissor" && computerChoice === "paper")
    ){
            //console.log("Humans")
            humanScore++;
    }   else {
            //console.log("Computer")
            computerScore++;
    }
};

container.addEventListener("click",(e)=>{
        let target = e.target;
        if (target.id === "btn"){
                const playerSelection = target.value; 
                const computerChoice = getComputerChoice();
                playRound(playerSelection, computerChoice);
        }
                console.log(target.value);
                console.log(getComputerChoice());
        if (humanScore > computerScore){
                console.log("Humans are the superiror race!");
        }   else if (computerScore > humanScore){
                console.log("AI are catching up to humanity");
        }
        console.log(`Final Results: Humans won ${humanScore} times, Computer won ${computerScore} times`);

});
/*
function playGame(){
        let humanScore = 0;
        let computerScore = 0;
        const playerSelection = getPlayerSelection();
        const computerChoice = getComputerChoice();
        const winner = playRound(playerSelection, computerChoice);
                if (playerSelection > computerChoice){
                    humanScore++;
            }   else if (computerChoice > playerSelection){
                    computerScore++;
            }
        }

    if (humanScore > computerScore){
        console.log("Humans are the superiror race!");
}   else if (computerScore > humanScore){
        console.log("AI are catching up to humanity");
}

    console.log(`Final Results: Humans won ${humanScore} times, Computer won ${computerScore} times`);

playGame();
*/

/*
 function playGame(){
    let humanScore = 0;
    let computerScore = 0;


    for (i=0; i<1; i++){
        const playerChoice = getPlayerSelection();
        const computerChoice = getComputerChoice();
        const winner = playRound(playerChoice, computerChoice);
                if (playerChoice > computerChoice){
                    humanScore++;
            }   else if (computerChoice > playerChoice){
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