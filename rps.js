function comp(){
        const rps = ["rock", "paper", "scissors"];
        const mix = Math.floor(Math.random() *rps.length);
        return rps[mix];
    }

    const all = document.createElement("div")
    all.setAttribute("id" , "all")
    document.body.appendChild(all);
    

    const hTitle = document.createElement("div")
    hTitle.setAttribute("id", "hTitle")
    hTitle.textContent = "The Jedi Order"
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
    rImg.src = "./iconsrps/rock.png"
    rImg.alt = "rock"
    rImg.id = "hChoice"
    rock.appendChild(rImg);
    
    const paper = document.createElement("button");
    paper.setAttribute("id", "option")
    paper.textContent = "Paper"
    paper.value = "paper"
    newDiv.appendChild(paper);

    const pImg = document.createElement("img");
    pImg.src = "./iconsrps/hello.png"
    pImg.alt = "paper"
    pImg.id = "hChoice"
    paper.appendChild(pImg);
    
    const scissors = document.createElement("button");
    scissors.setAttribute("id", "option")
    scissors.textContent = "Scissors"
    scissors.value = "scissors"
    newDiv.appendChild(scissors);

    const sImg = document.createElement("img");
    sImg.src = "./iconsrps/scissors.png"
    sImg.alt = "scissors"
    sImg.id = "hChoice"
    scissors.appendChild(sImg);

    /* const card = document.createElement("div");
    document.body.appendChild(card);

    const hCard = document.createElement("button");
    // Should this be a button or a highlighted paragraph with borders?
    hCard.textContent = "Human Choice"
    card.appendChild(hCard); 
    
    const div1 = document.createElement("div");
    div1.setAttribute("id", "div1");
    document.body.appendChild(div1); */
    
    let sapiensPoint = 0;
    let computerPoint = 0;
    let tieScore = 0;
    function battle(sapiens, comp){
        if(sapiens === comp){
       /*     const divp = document.createElement("p")
            divp.textContent = "What a close battle - its a tie!";
            div1.appendChild(divp); 
            const divp1 = document.createElement("p")
            divp1.textContent = `Sapiens: ${sapiens} | Computer: ${comp}`
            div1.appendChild(divp1);*/
            tieScore++;
            resetColor();
            console.log(sapiens)
                console.log(comp)
        } else if (
            (sapiens === "rock" && comp === "scissors") ||
            (sapiens === "paper" && comp === "rock") ||
            (sapiens === "scissors" && comp === "paper")
        ){
                console.log(sapiens)
                console.log(comp)
            /*
            const divp2 = document.createElement("p")
            divp2.textContent = "No mercy - humans are victorious";
            div1.appendChild(divp2); 
            const divp3 = document.createElement("p")
            divp3.textContent = `Sapiens: ${sapiens} | Computer: ${comp}`
            div1.appendChild(divp3); */
            sapiensPoint++;
            resetColor();
        }else {
            /* const divp4 = document.createElement("p")
            divp4.textContent = "Aww man - computers are figuring it out";
            div1.appendChild(divp4);
            const divp5 = document.createElement("p")
            divp5.textContent = `Sapiens: ${sapiens} | Computer: ${comp}`
            div1.appendChild(divp5); */
            computerPoint++;
            resetColor();
            console.log(sapiens)
                console.log(comp)
        }
        score();
       /* const points = document.createElement("p");
        points.textContent = `Sapiens: ${sapiensPoint} | Computer: ${computerPoint} | Draw: ${tieScore}`;
        div1.appendChild(points); */
        
        if (sapiensPoint === 5){
            const divp6 = document.createElement("p")
            divp6.textContent = "The Force Awakens!"
            hvsc.appendChild(divp6)
        } else if (computerPoint === 5){
            const divp7 = document.createElement("p")
            divp7.textContent = "The Empire Strikes Back!"
            hvsc.appendChild(divp7)
        }
    
        if (sapiensPoint === 5 || computerPoint === 5){
            const divp8 = document.createElement("button")
            divp8.textContent = "Play Again"
            divp8.setAttribute("id", "clear");
            divp8.classList.add("clear")
            hvsc.appendChild(divp8)
            newDiv.removeEventListener("click", start);
            sapiensPoint = 0;
            computerPoint = 0;
            tieScore = 0;
        }
    }
    
    newDiv.addEventListener("click", start);
    
    function start(e){
        //let target = e.target
        const btn = e.target.closest("button#option");
        if (!btn) return;


        //if (target.id === "hChoice"){
            const sapiens = btn.value;
            const computer = comp();
            battle(sapiens, computer);
            if (computer === "rock"){
                cRock.style.backgroundColor = "#FF0000";
            } else if (computer === "paper"){
                cPaper.style.backgroundColor = "#FF0000";
            } else if (computer === "scissors"){
                cScissors.style.backgroundColor = "#FF0000";
            } 
            if (sapiens === "rock"){
                rock.style.backgroundColor = "#1E90FF";
            } else if (sapiens === "paper"){
                paper.style.backgroundColor = "#1E90FF";
            } else if (sapiens === "scissors"){
                scissors.style.backgroundColor = "#1E90FF";
            } 
        }

    
    function setColor(){
        const computer = comp();
            if (computer === "rock"){
                cRock.style.backgroundColor = "Pink";
            } else if (computer === "paper"){
                cPaper.style.backgroundColor = "Pink";
            } else if (computer === "scissors"){
                cScissors.style.backgroundColor = "Pink";
            } 
           
        }

    function resetColor(){
              /*  
            [cRock, cPaper, cScissors].forEach(cOption => {
                cOption.style.backgroundColor = "";
            })};
            */
                cRock.style.backgroundColor = '';
                cPaper.style.backgroundColor = '';
                cScissors.style.backgroundColor = '';

                rock.style.backgroundColor = '';
                paper.style.backgroundColor = '';
                scissors.style.backgroundColor = '';

            }
    const hvsc = document.createElement("div");
    hvsc.setAttribute("id", "hvsc");
    document.body.appendChild(hvsc);
    
    hvsc.addEventListener("click", reset);
    
    function reset(e){
        let target = e.target;
        if (target.classList.contains("clear")){
            hvsc.innerHTML = "Make Your Move"
            resetColor();
            newDiv.addEventListener("click", start);
        }
    }

    const hScore = document.createElement("p");
    hScore.textContent = `Jedi: ${sapiensPoint} | Sith: ${computerPoint} | Draw: ${tieScore}`;
    hvsc.appendChild(hScore);
    
    function score(){
        hScore.textContent = `Jedi: ${sapiensPoint} | Sith: ${computerPoint} | Draw: ${tieScore}`;
        hvsc.appendChild(hScore);
    }

    const card1 = document.createElement("div");
    document.body.appendChild(card1);

    const cCard1 = document.createElement("p");
    cCard1.textContent = "Battle as a Jedi Knight and get 5 wins to defeat The Sith Empire"
    card1.appendChild(cCard1);


    const cButton = document.createElement("div");
    cButton.setAttribute("id", "cButton");
    document.body.appendChild(cButton);

    const cRock = document.createElement("button");
    cRock.setAttribute("id", "cOption")
    cRock.textContent = "Rock";
    cRock.value = "rock";
    cButton.appendChild(cRock);

    const crImg = document.createElement("img");
    crImg.src = "./iconsrps/robofist1.png"
    crImg.alt = "rock"
    cRock.appendChild(crImg);

    const cPaper = document.createElement("button");
    cPaper.setAttribute("id", "cOption")
    cPaper.textContent = "Paper";
    cPaper.value = "paper";
    cButton.appendChild(cPaper);

    const cpImg = document.createElement("img");
    cpImg.src = "./iconsrps/robohand3.png"
    cpImg.alt = "rock"
    cPaper.appendChild(cpImg);

    const cScissors = document.createElement("button");
    cScissors.setAttribute("id", "cOption")
    cScissors.textContent = "Scissors";
    cScissors.value = "scissors";
    cButton.appendChild(cScissors);

    const csImg = document.createElement("img");
    csImg.src = "./iconsrps/robosc.png"
    csImg.alt = "rock"
    cScissors.appendChild(csImg);

    const title = document.querySelector("#container");
    document.body.appendChild(container)
    title.textContent = "The Sith Empire"


    // build an overlay for winners and to play again
    // make gray colorway
    all.appendChild(hTitle);
    all.appendChild(cCard1);
    all.appendChild(divi);
    all.appendChild(hvsc);
    all.appendChild(cButton);
    all.appendChild(container); 
    