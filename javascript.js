let x = 1
humanScore = 0
computerScore = 0

function getComputerChoice() {
    x = Math.random() * x;
    if (x < .33) {
        return "rock"
    }
    else if (x > .33 && x < .66){
        return "paper"
    }
    else if (x > .66) {
        return "scissors"
    }
}

function getHumanChoice () {
    let game = prompt("jan ken pon!")
    return game
} 

console.log(getHumanChoice())

