const choices = ['rock', 'paper', 'scissors'];

let playerScore = 0;

let computerScore = 0;

let playerSelection;

let computerSelection;

const result = document.querySelector('.result');

const score = document.querySelector('.score');

const restart = document.querySelector('.restart');
restart.addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    score.classList.remove("final");
    score.textContent = `Player score = ${playerScore}\r\nComputer score = ${computerScore}`;
});

const finalResult = document.querySelector('p.final-result');

const rockButton = document.querySelector('button.rock').addEventListener("click", function() {
    playRound('rock');
})

const paperButton = document.querySelector('button.paper').addEventListener("click", function() {
    playRound('paper');
})

const scissorsButton = document.querySelector('button.scissors').addEventListener("click", function() {
    playRound('scissors');
})

console.log(playerScore, computerScore)
function playRound(playerSelection) {
    computerSelection = choices[Math.floor(Math.random() * 3)];

    if (playerSelection == 'rock' && computerSelection == 'paper' && computerScore < 5 && playerScore < 5) {
        result.textContent = `You chose ${playerSelection}\nComputer chose ${computerSelection}\nPaper beats rock.`;
        updateScore();
        computerScore = computerScore + 1;
        
    }
    else if (playerSelection == 'rock' && computerSelection == 'rock' && computerScore < 5 && playerScore < 5) {
        result.textContent = `You chose ${playerSelection}\nComputer chose ${computerSelection}.\nTie!`;
        updateScore();
    }
    else if (playerSelection == 'rock' && computerSelection == 'scissors' && computerScore < 5 && playerScore < 5) {
        result.textContent = `You chose ${playerSelection}\nComputer chose ${computerSelection}\nRock beats scissors.`;
        playerScore = playerScore + 1;
        updateScore();
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock' && computerScore < 5 && playerScore < 5) {
        result.textContent = `You chose ${playerSelection}\nComputer chose ${computerSelection}\nPaper beats rock.`;
        playerScore = playerScore + 1;
        updateScore();
    }
    else if (playerSelection == 'paper' && computerSelection == 'paper' && computerScore < 5 && playerScore < 5) {
        result.textContent = `You chose ${playerSelection}\nComputer chose ${computerSelection}\nTie!`;
        updateScore();
    }
    else if (playerSelection == 'paper' && computerSelection == 'scissors' && computerScore < 5 && playerScore < 5){
        result.textContent = `You chose ${playerSelection}\nComputer chose ${computerSelection}\nScissors beat paper.`;
        computerScore = computerScore + 1;
        updateScore();
    }
    else if (playerSelection == 'scissors' && computerSelection == 'rock' && computerScore < 5 && playerScore < 5) {
        result.textContent = `You chose ${playerSelection}\nComputer chose ${computerSelection}\nRock beats scissors.`;
        computerScore = computerScore + 1;
        updateScore();
    }
    else if(playerSelection == 'scissors' && computerSelection == 'paper' && computerScore < 5 && playerScore < 5) {
        result.textContent = `You chose ${playerSelection}\nComputer chose ${computerSelection}\nPaper beats scissors.`;
        playerScore = playerScore + 1;
        updateScore();
    }
    else if (playerSelection == 'scissors' && computerSelection == 'scissors' && computerScore < 5 && playerScore < 5) {
        result.textContent = `You chose ${playerSelection}\nComputer chose ${computerSelection}\nTie!`;
        updateScore();
    }
    else if (playerScore >= 5 || computerScore >= 5) {
        updateScore()
    }
    else {
        result.textContent = "something went wrong"
        updateScore()
    }
}

function updateScore() {
    if (computerScore >=5) {
        score.classList.add("final")
        score.textContent = `Player score = ${playerScore}\r\nComputer score = ${computerScore}\nYOU LOST!`;
        restart.classList.remove("hide")
    }
    else if (playerScore >= 5) {
        score.classList.add("final")
        score.textContent = `Player score = ${playerScore}\r\nComputer score = ${computerScore}\nYOU WON!`;
        restart.classList.remove('hide')
    }
    else {
        score.textContent = `Player score = ${playerScore}\r\nComputer score = ${computerScore}`;
    }
}
