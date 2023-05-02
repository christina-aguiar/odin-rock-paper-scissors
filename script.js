const choices = ['rock', 'paper', 'scissors'];

playerScore = 0;

computerScore = 0;

round = 0;

function game() {
    playRound();
    return `Round = ${round} - Player score = ${playerScore} - Computer score =  ${computerScore}.`
}

function playRound(playerSelection, computerSelection) {

    playerSelection = prompt("Make your choice. Rock, paper or scissors?").toLowerCase();

    computerSelection = choices[Math.floor(Math.random() * 3)];

    round = round + 1; 
    
    if (playerSelection == 'rock' && computerSelection == 'paper') {
        console.log(`You chose ${playerSelection}\nComputer chose ${computerSelection}\nYou lose! Paper beats rock.`);
        computerScore = computerScore + 1;
    }
    else if (playerSelection == 'rock' && computerSelection == 'rock') {
        console.log(`You chose ${playerSelection}\nComputer chose ${computerSelection}.\nTie!`)
    }
    else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        console.log(`You chose ${playerSelection}\nComputer chose ${computerSelection}\nYou win! Rock beats scissors.`)
        playerScore = playerScore + 1;
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock') {
        console.log(`You chose ${playerSelection}\nComputer chose ${computerSelection}\nYou win! Paper beats rock.`)
        playerScore = playerScore + 1;
    }
    else if (playerSelection == 'paper' && computerSelection == 'paper') {
        console.log(`You chose ${playerSelection}\nComputer chose ${computerSelection}\nTie!`)
    }
    else if (playerSelection == 'paper' && computerSelection == 'scissors'){
        console.log(`You chose ${playerSelection}\nComputer chose ${computerSelection}\nYou lose! Scissors beat paper.`)
        computerScore = computerScore + 1;
    }
    else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        console.log(`You chose ${playerSelection}\nComputer chose ${computerSelection}\nYou lose! Rock beats scissors.`)
        computerScore = computerScore + 1;
    }
    else if(playerSelection == 'scissors' && computerSelection == 'paper') {
        console.log(`You chose ${playerSelection}\nComputer chose ${computerSelection}\nYou win! Paper beats scissors.`)
        playerScore = playerScore + 1;
    }
    else if (playerSelection == 'scissors' && computerSelection == 'scissors') {
        console.log(`You chose ${playerSelection}\nComputer chose ${computerSelection}\nTie!`)
    }
    else {
        console.log("Something went wrong!")
    }
}




