function getRandInt( max){
    return Math.floor(Math.random()*max);
}

function getCompChoice(){
    let int = getRandInt(3);
    if(int == 0) return "rock";
    else if (int == 1) return "paper";
    else return "scissor";
}

function getHumanChoice(){
    let choice = prompt("Enter your choice:");
    return choice.toLowerCase();
}
let humanScore = 0;
let compScore = 0;

function playRound(humanChoice,CompChoice){
    if(humanChoice == CompChoice) console.log("It's a draw!");
    else if(humanChoice == "rock" && CompChoice == "paper") {console.log("You lose! Paper beats Rock");
        compScore++;
    }
    else if(humanChoice == "rock" && CompChoice == "scissor") {console.log("You win! rock beats Scissors");
        humanScore++;
    }
    else if(humanChoice == "paper" && CompChoice == "rock"){ console.log("You win! Paper beats Rock");
        humanScore++;
    }
    else if(humanChoice == "paper" && CompChoice == "scissor") {console.log("You lose! Scissors beats paper");
        compScore++;
}
    else if(humanChoice == "scissor" && CompChoice == "paper") {console.log("You win! Scissors beats Paper");
            humanScore++;
    }
    else if(humanChoice == "scissor" && CompChoice == "rock"){ console.log("You lose! Rock beats Scissors");
        compScore++;
    }
    

}

function playGame(){
    let rounds = 5;
    while(rounds > 0){
        let human = getHumanChoice();
        let comp = getCompChoice();
        playRound(human,comp);
        rounds--;
    }

    if(humanScore > compScore){
        console.log("You win\nYour score: " + humanScore + "\nComp score: " + compScore);
    }

    else if(compScore > humanScore){
        console.log("You lose\nYour score: " + humanScore + "\nComp score: " + compScore);
    }
    
    else{
        console.log("It is a draw\nYour score: " + humanScore + "\nComp score: " + compScore);
    }
    
}

playGame()
