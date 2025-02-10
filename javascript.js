function getComputerChoice(){
    let x = 1
    x = Math.random() * x
    let computerChoice = " "
    if (x < .33) {
        computerChoice = "rock"
    }
    else if ((x > .33) && (x < .66)){
        computerChoice = "scissors"
    }
    else if (x > .66) {
        computerChoice = "paper"
    }
    return  computerChoice
}

 function getHumanChoice(){
     let humanChoice = prompt("jan ken pon!")
     return humanChoice
 } 



function playGame(){
    humanScore = 0
    computerScore = 0

    function playRound (x, y){
        if (x === "rock" && y === "scissors" || x === "paper" && y === "rock" || x === "scissors" && y === "paper") {
            humanScore = humanScore + 1
            console.log(x + " beats " + y + " you win! ") 
        }
        else if (y === "rock" && x === "scissors" || y === "paper" && x === "rock" || y === "scissors" && x === "paper") {
            computerScore = computerScore + 1
            console.log(y + " beats " + x + " you lose! ")
        }
        else if (x === y){
            console.log("tie! go again")
        }
    }

    for (i = 0; i < 5; i++){      
        const humanSelection = getHumanChoice()
        const computerSelection = getComputerChoice()
        playRound(humanSelection, computerSelection)
    }

    console.log(humanScore, computerScore)
}

playGame()




