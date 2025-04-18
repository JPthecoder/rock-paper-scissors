function comp(){
        const rps = ["rock", "paper", "scissors"];
        const mix = Math.floor(Math.random() *rps.length);
        return rps[mix];
    }
    
    const newDiv = document.createElement("div");
    newDiv.setAttribute("id", "divi");
    
    document.body.appendChild(newDiv);
    
    const rock = document.createElement("button");
    rock.setAttribute("id", "option")
    rock.textContent = "Rock"
    rock.value = "rock"
    newDiv.appendChild(rock);
    
    const paper = document.createElement("button");
    paper.setAttribute("id", "option")
    paper.textContent = "Paper"
    paper.value = "paper"
    newDiv.appendChild(paper);
    
    const scissors = document.createElement("button");
    scissors.setAttribute("id", "option")
    scissors.textContent = "Scissors"
    scissors.value = "scissors"
    newDiv.appendChild(scissors);
    
    const div1 = document.createElement("div");
    div1.setAttribute("id", "div1");
    document.body.appendChild(div1);
    
    let sapiensPoint = 0;
    let computerPoint = 0;
    let tieScore = 0;
    function battle(sapiens, comp){
        if(sapiens === comp){
            const divp = document.createElement("p")
            divp.textContent = "What a close battle - its a tie!";
            div1.appendChild(divp);
            const divp1 = document.createElement("p")
            divp1.textContent = `Sapiens: ${sapiens} | Computer: ${comp}`
            div1.appendChild(divp1);
            tieScore++;
        } else if (
            (sapiens === "rock" && comp === "scissors") ||
            (sapiens === "paper" && comp === "rock") ||
            (sapiens === "scissors" && comp === "paper")
        ){
            const divp2 = document.createElement("p")
            divp2.textContent = "No mercy - humans are victorious";
            div1.appendChild(divp2);
            const divp3 = document.createElement("p")
            divp3.textContent = `Sapiens: ${sapiens} | Computer: ${comp}`
            div1.appendChild(divp3);
            sapiensPoint++;
        }else {
            const divp4 = document.createElement("p")
            divp4.textContent = "Aww man - computers are figuring it out";
            div1.appendChild(divp4);
            const divp5 = document.createElement("p")
            divp5.textContent = `Sapiens: ${sapiens} | Computer: ${comp}`
            div1.appendChild(divp5);
            computerPoint++;
        }
        const points = document.createElement("p");
        points.textContent = `Sapiens: ${sapiensPoint} | Computer: ${computerPoint} | Draw: ${tieScore}`;
        div1.appendChild(points);
        
        if (sapiensPoint === 5){
            const divp6 = document.createElement("p")
            divp6.textContent = "Sapiens are the superior race!"
            div1.appendChild(divp6)
        } else if (computerPoint === 5){
            const divp7 = document.createElement("p")
            divp7.textContent = "AI is the superior race!"
            div1.appendChild(divp7)
        }
    
        if (sapiensPoint === 5 || computerPoint === 5){
            const divp8 = document.createElement("button")
            divp8.textContent = "Play Again?"
            divp8.setAttribute("id", "clear");
            divp8.classList.add("clear")
            div1.appendChild(divp8)
            newDiv.removeEventListener("click", start);
            sapiensPoint = 0;
            computerPoint = 0;
            tieScore = 0;
        }
    }
    
    newDiv.addEventListener("click", start);
    
    function start(e){
        let target = e.target
    
        if (target.id === "option"){
            const sapiens = target.value;
            const computer = comp();
            battle(sapiens, computer);
        }
    }
    
    div1.addEventListener("click", reset);
    
    function reset(e){
        let target = e.target;
        if (target.classList.contains("clear")){
            div1.innerHTML = "";
            newDiv.addEventListener("click", start);
        }
    }