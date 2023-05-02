const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
     return choices[Math.floor(Math.random() * 3)]
}

const playerSelection = prompt("Make your choice. Rock, paper or scissors?").toLowerCase();

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'paper') {
        return `You chose ${playerSelection}\nComputer chose ${computerSelection}\nYou lose! Paper beats rock.`
    }
    else if (playerSelection == 'rock' && computerSelection == 'rock') {
        return `You chose ${playerSelection}\nComputer chose ${computerSelection}.\nTie!`
    }
    else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return `You chose ${playerSelection}\nComputer chose ${computerSelection}\nYou win! Rock beats scissors.`
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return `You chose ${playerSelection}\nComputer chose ${computerSelection}\nYou win! Paper beats rock.`
    }
    else if (playerSelection == 'paper' && computerSelection == 'paper') {
        return `You chose ${playerSelection}\nComputer chose ${computerSelection}\nTie!`
    }
    else if (playerSelection == 'paper' && computerSelection == 'scissors'){
        return `You chose ${playerSelection}\nComputer chose ${computerSelection}\nYou lose! Scissors beat paper.`
    }
    else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return `You chose ${playerSelection}\nComputer chose ${computerSelection}\nYou lose! Rock beats scissors.`
    }
    else if(playerSelection == 'scissors' && computerSelection == 'paper') {
        return `You chose ${playerSelection}\nComputer chose ${computerSelection}\nYou win! Paper beats scissors.`
    }
    else if (playerSelection == 'scissors' && computerSelection == 'scissors') {
        return `You chose ${playerSelection}\nComputer chose ${computerSelection}\nTie!`
    }
    else {
        return "Something went wrong!"
    }
}

const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));

