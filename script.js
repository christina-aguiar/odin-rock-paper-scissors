const choices = ['rock', 'paper', 'scissors'];

function playRound(playerSelection, computerSelection) {

    playerSelection = prompt("Make your choice. Rock, paper or scissors?").toLowerCase()

    computerSelection = choices[Math.floor(Math.random() * 3)];

    if (playerSelection == 'rock' && computerSelection == 'paper') {
        console.log(`You chose ${playerSelection}\nComputer chose ${computerSelection}\nYou lose! Paper beats rock.`)
    }
    else if (playerSelection == 'rock' && computerSelection == 'rock') {
        console.log(`You chose ${playerSelection}\nComputer chose ${computerSelection}.\nTie!`)
    }
    else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        console.log(`You chose ${playerSelection}\nComputer chose ${computerSelection}\nYou win! Rock beats scissors.`)
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock') {
        console.log(`You chose ${playerSelection}\nComputer chose ${computerSelection}\nYou win! Paper beats rock.`)
    }
    else if (playerSelection == 'paper' && computerSelection == 'paper') {
        console.log(`You chose ${playerSelection}\nComputer chose ${computerSelection}\nTie!`)
    }
    else if (playerSelection == 'paper' && computerSelection == 'scissors'){
        console.log(`You chose ${playerSelection}\nComputer chose ${computerSelection}\nYou lose! Scissors beat paper.`)
    }
    else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        console.log(`You chose ${playerSelection}\nComputer chose ${computerSelection}\nYou lose! Rock beats scissors.`)
    }
    else if(playerSelection == 'scissors' && computerSelection == 'paper') {
        console.log(`You chose ${playerSelection}\nComputer chose ${computerSelection}\nYou win! Paper beats scissors.`)
    }
    else if (playerSelection == 'scissors' && computerSelection == 'scissors') {
        console.log(`You chose ${playerSelection}\nComputer chose ${computerSelection}\nTie!`)
    }
    else {
        console.log("Something went wrong!")
    }
}




