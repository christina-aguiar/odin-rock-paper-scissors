console.log('Goodbye World');
const computerSelection = ['Rock', 'Paper', 'Scissors'];
function getComputerChoice() {
    return computerSelection[Math.floor(Math.random() * 3)]
}
let playerSelection = prompt("Make your choice. Rock, paper or scissors?");