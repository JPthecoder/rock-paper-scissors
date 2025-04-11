function getComputerChoice(){
/*    let option = Math.floor(Math.random() *3);
        if (option == "0"){
            return "rock";
    }   else if (option == "1"){
            return "paper";
    }   else if (option == "2"){
            return "scissors";
    }
};
*/
        const colorOption = ["rock", "paper", "scissor"];
        const randomIndex = Math.floor(Math.random() * colorOption.length);
        return colorOption[randomIndex];
}
//console.log(getComputerChoice());

const container = document.querySelector("#container");
container.setAttribute("id", "container");


const rock = document.createElement("button");
rock.setAttribute('id', 'btn');
rock.value = "rock";
rock.classList.add("button");
rock.textContent = "Rock";


container.appendChild(rock);

const paper = document.createElement("button");
paper.setAttribute('id', 'btn');
paper.value = "paper";
paper.classList.add("button");
paper.textContent = "Paper";

container.appendChild(paper);

const scissor = document.createElement("button");
scissor.setAttribute('id', 'btn');
scissor.value = "scissor";
scissor.classList.add("button");
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
let tieScore = 0;
let currentRound = 0;

function playRound(playerSelection, computerChoice){
    // the results of this game will always have a tie and either computer or human winning
    // we want to declare the constant first just in case there is a mix up when both var equals the same option
        
    if (playerSelection === computerChoice){
                const newDiv2 = document.createElement("div");
                   newDiv2.setAttribute("id", "newDiv");
                   newDiv2.textContent = ` Results: AI knows you well, its a tie!`;
                   container.appendChild(newDiv2);
                   tieScore++
    }   else if (
            (playerSelection === "rock" && computerChoice === "scissor") ||
            (playerSelection === "paper" && computerChoice === "rock") ||
            (playerSelection === "scissor" && computerChoice === "paper")
    ){
            //console.log("Humans")
            humanScore++;
            const newDiv = document.createElement("div")
                newDiv.setAttribute("id", "newDiv");
                newDiv.textContent = `Humans Win!`;
                container.appendChild(newDiv);
            console.log("Humans are the superiror race!");
    }   else {
            //console.log("Computer")
            computerScore++;
            const newDiv2 = document.createElement("div")
                newDiv2.setAttribute("id", "newDiv");
                newDiv2.textContent = `Computers Win!`;
                container.appendChild(newDiv2);
            console.log("Humans are the superiror race!");
            console.log("AI are catching up to humanity");

    }

    console.log(playerSelection);
    console.log(computerChoice);

    const newDiv1 = document.createElement("div");
        newDiv1.setAttribute("id","Div");
        newDiv1.textContent = `Players choice: ${playerSelection} | Computers choice: ${computerChoice}`;;
        container.appendChild(newDiv1);
    

/*    if (humanScore > computerScore){
        console.log("Humans are the superiror race!");
}   else if (computerScore > humanScore){
        console.log("AI are catching up to humanity");
} */
        let maxRound = 5;
        currentRound++;
        console.log(`Current Round: ${currentRound}`);
        if (currentRound < maxRound){
                console.log(`Current Results: Humans won ${humanScore} times, Computer won ${computerScore} times`);
        } else if (currentRound <= maxRound){
                const newDiv3 = document.createElement("div")
                        newDiv3.setAttribute("id", "newDiv");
                        newDiv3.textContent = `Best of 5 Results: Humans won ${humanScore} times, Computer won ${computerScore} times, Ties: ${tieScore}`;
                        container.appendChild(newDiv3);
        };

 /*       if(humanScore>computerScore){
                const newDiv5 = document.createElement("div")
                        newDiv5.setAttribute("id", "newDiv");
                        newDiv5.textContent = "The champion is the Human!";
                        container.appendChild(newDiv5);
        } else if (computerScore<humanScore){
                const newDiv5 = document.createElement("div")
                        newDiv5.setAttribute("id", "newDiv");
                        newDiv5.textContent = "The champion is the Computer!";
                container.appendChild(newDiv5);        
        };
*/
        if (currentRound > maxRound){
                const newDiv4 = document.createElement("div")
                        newDiv4.setAttribute("id", "newDiv");
                        newDiv4.textContent = "Click below to play again";
                        container.appendChild(newDiv4)
                const button1 = document.createElement("button");
                        button1.textContent = "Play Again";
                        button1.setAttribute("id", "button")
                        container.appendChild(button1);
               
                        
        }};
        /* container.addEventListener("click",(e)=>{
                let target = e.target;
                if (target.id === "button"){
                        const playerSelection = target.value;
                        const computerChoice = getComputerChoice();
                        playRound(playerSelection,computerChoice);
                }
        }) */



container.addEventListener("click",(e)=>{
        let target = e.target;
        if (target.id === "btn"){
                const playerSelection = target.value; 
                const computerChoice = getComputerChoice();
                playRound(playerSelection, computerChoice);
        }
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


    for (i=0; i<5; i++){
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