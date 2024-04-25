const btns = document.querySelectorAll('.rps__list__btn');
const computerScore = document.querySelector('.comp__score');
const playerScore = document.querySelector('.player__score');
const winner = document.getElementById('winner');
const resultBtn = document.querySelector('.rps__btn');

let playerChoice = '';
let computerChoice = '';

const losingString = 'Комп’ютер виграв раунд!';
// losingString.style.color = 'red';

const winningString = 'Ви виграли раунд!';
// winningString.style.color = 'green';

btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        playerChoice = btn.dataset.choice;
        computerChoice = generateComputerChoice();
        const winner = generateWinner(playerChoice, computerChoice);
    });
});

function generateComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
};

function generateWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'Нічия!';
    } else if ((computerChoice === 'rock' && playerChoice === 'scissors') ||
        (computerChoice === 'scissors' && playerChoice === 'paper') ||
        (computerChoice === 'paper' && playerChoice === 'rock')) {
        return losingString;
        computerScore.textContent += 1;
    } else {
        return winningString;
        playerScore.textContent += 1;
    }
};

resultBtn.addEventListener('click', () => {
    computerChoice.style.borderColor = 'green';
});