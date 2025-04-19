function comp(){
        const rps = ["rock", "paper", "scissors"];
        const mix = Math.floor(Math.random() *rps.length);
        return rps[mix];
    }

    const hTitle = document.createElement("div")
    hTitle.setAttribute("id", "hTitle")
    hTitle.textContent = "Human"
    document.body.appendChild(hTitle)
    
    const newDiv = document.createElement("div");
    newDiv.setAttribute("id", "divi");
    
    document.body.appendChild(newDiv);
    
    const rock = document.createElement("button");
    rock.setAttribute("id", "option")
    rock.textContent = "Rock"
    rock.value = "rock"
    newDiv.appendChild(rock);

    const rImg = document.createElement("img");
    rImg.src = "./icons-for-rps/rock.png"
    rImg.alt = "Rock"
    rock.appendChild(rImg);
    
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

    const card = document.createElement("div");
    document.body.appendChild(card);

    const hCard = document.createElement("button");
    // Should this be a button or a highlighted paragraph with borders?
    hCard.textContent = "Human Choice"
    card.appendChild(hCard);
    
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

 

    const hvsc = document.createElement("div");
    hvsc.setAttribute("id", "hvsc");
    document.body.appendChild(hvsc);

    const hScore = document.createElement("p");
    hScore.textContent = `Sapiens: ${sapiensPoint} | Computer: ${computerPoint}`
    hvsc.appendChild(hScore);


    const card1 = document.createElement("div");
    document.body.appendChild(card1);

    const cCard = document.createElement("button");
    // Should this be a button or a highlighted paragraph with borders?
    cCard.textContent = "Computer Choice"
    card1.appendChild(cCard);


    const cButton = document.createElement("div");
    cButton.setAttribute("id", "cButton");
    document.body.appendChild(cButton);

    const cRock = document.createElement("button");
    cRock.setAttribute("id", "cOption")
    cRock.textContent = "Paper";
    cRock.value = "paper";
    cButton.appendChild(cRock);

    const cPaper = document.createElement("button");
    cPaper.setAttribute("id", "cOption")
    cPaper.textContent = "Paper";
    cPaper.value = "paper";
    cButton.appendChild(cPaper);

    const cScissors = document.createElement("button");
    cScissors.setAttribute("id", "cOption")
    cScissors.textContent = "Scissors";
    cScissors.value = "scissors";
    cButton.appendChild(cScissors);

    const title = document.querySelector("#container");
    document.body.appendChild(container)
    title.textContent = "Computer"


    // add icons
    // have choices highlighted for both humans and computer
    // highlight face off buttons
    // build an overlay for winners and to play again