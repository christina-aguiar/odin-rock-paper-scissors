console.log('Goodbye World');
const computerSelection = ['Rock', 'Paper', 'Scissors']
function getComputerChoice() {
    return computerSelection[Math.floor(Math.random() * 3)]
}