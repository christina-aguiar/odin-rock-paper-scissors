const choices = ['rock', 'paper', 'scissors'];

let playerScore = 0;

let computerScore = 0;

const result = document.querySelector('.result');

let score = document.querySelector('.score');

let playerSelection; 

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
        result.textContent = `You chose ${playerSelection}\nComputer chose ${computerSelection}\nYou lose! Paper beats rock.`;
        updateText();
        computerScore = computerScore + 1;
        
    }
    else if (playerSelection == 'rock' && computerSelection == 'rock' && computerScore < 5 && playerScore < 5) {
        result.textContent = `You chose ${playerSelection}\nComputer chose ${computerSelection}.\nTie!`;
        updateText();
    }
    else if (playerSelection == 'rock' && computerSelection == 'scissors' && computerScore < 5 && playerScore < 5) {
        result.textContent = `You chose ${playerSelection}\nComputer chose ${computerSelection}\nYou win! Rock beats scissors.`;
        playerScore = playerScore + 1;
        updateText();
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock' && computerScore < 5 && playerScore < 5) {
        result.textContent = `You chose ${playerSelection}\nComputer chose ${computerSelection}\nYou win! Paper beats rock.`;
        playerScore = playerScore + 1;
        updateText();
    }
    else if (playerSelection == 'paper' && computerSelection == 'paper' && computerScore < 5 && playerScore < 5) {
        result.textContent = `You chose ${playerSelection}\nComputer chose ${computerSelection}\nTie!`;
        updateText();
    }
    else if (playerSelection == 'paper' && computerSelection == 'scissors' && computerScore < 5 && playerScore < 5){
        result.textContent = `You chose ${playerSelection}\nComputer chose ${computerSelection}\nYou lose! Scissors beat paper.`;
        computerScore = computerScore + 1;
        updateText();
    }
    else if (playerSelection == 'scissors' && computerSelection == 'rock' && computerScore < 5 && playerScore < 5) {
        result.textContent = `You chose ${playerSelection}\nComputer chose ${computerSelection}\nYou lose! Rock beats scissors.`;
        computerScore = computerScore + 1;
        updateText();
    }
    else if(playerSelection == 'scissors' && computerSelection == 'paper' && computerScore < 5 && playerScore < 5) {
        result.textContent = `You chose ${playerSelection}\nComputer chose ${computerSelection}\nYou win! Paper beats scissors.`;
        playerScore = playerScore + 1;
        updateText();
    }
    else if (playerSelection == 'scissors' && computerSelection == 'scissors' && computerScore < 5 && playerScore < 5) {
        result.textContent = `You chose ${playerSelection}\nComputer chose ${computerSelection}\nTie!`;
        updateText();
    }
    else if (playerScore => 5) {
        result.classList.add("final")
        result.textContent = "you won"
        updateText();
    }
    else if (computerScore => 5) {
        result.classList.add("final")
        result.textContent = "you lost"
        updateText();
    }
    else {
        result.textContent = "something went wrong"
    }
}

function updateText() {
score.textContent = `Player score = ${playerScore}\r\nComputer score = ${computerScore}`;
}