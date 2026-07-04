

function getRandInt( max){
    return Math.floor(Math.random()*max);
}

function getCompChoice(){
    let int = getRandInt(3);
    if(int == 0) return "rock";
    else if (int == 1) return "paper";
    else return "scissor";
}

function getHumanChoice(event){
    let humanChoice = ''
    switch(event.target.id){
        case 'rock':
            humanChoice = 'rock'
        case 'paper':
            humanChoice = 'paper'
        case 'scissor':
            humanChoice = 'scissor'
            
    }
    return humanChoice
}
let humanScore = 0;
let compScore = 0;

function playRound(humanChoice,CompChoice,result){
    if(humanChoice == CompChoice) result.textContent="It's a draw!";
    else if(humanChoice == "rock" && CompChoice == "paper") {result.textContent = "You lose! Paper beats Rock";
        compScore++;

    }
    else if(humanChoice == "rock" && CompChoice == "scissor") {result.textContent="You win! rock beats Scissors";
        humanScore++;
    }
    else if(humanChoice == "paper" && CompChoice == "rock"){ result.textContent = "You win! Paper beats Rock";
        humanScore++;
    }
    else if(humanChoice == "paper" && CompChoice == "scissor") {result.textContent = "You lose! Scissors beats paper";
        compScore++;
}
    else if(humanChoice == "scissor" && CompChoice == "paper") {result.textContent = "You win! Scissors beats Paper";
            humanScore++;
    }
    else if(humanChoice == "scissor" && CompChoice == "rock"){ result.textContent = "You lose! Rock beats Scissors";
        compScore++;
    }
    

}



const rock = document.createElement("button")
const paper = document.createElement("button")
const sci = document.createElement("button")
const buttons = document.createElement("div")

buttons.appendChild(rock)
buttons.appendChild(paper)
buttons.appendChild(sci)
const body = document.querySelector("body")
body.appendChild(buttons)
rock.textContent = "Rock"
paper.textContent = "Paper"
sci.textContent = "Scissor"

rock.setAttribute('id','rock')
paper.setAttribute('id','paper')
sci.setAttribute('id','scissor')


const result = document.createElement("div")
body.appendChild(result)

const finalScore = document.createElement("div")
body.appendChild(finalScore)
buttons.addEventListener('click', (event)=> {
    playGame(event,finalScore,result)
    
})

