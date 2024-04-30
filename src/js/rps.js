const choices = ['rock', 'scissors', 'paper'];
const buttons = document.querySelectorAll('.rps__list__btn');
const winner = document.querySelector('.winner');
const computerScore = document.getElementById('comp__score');
const playerScore = document.getElementById('player__score');
const resultBtn = document.querySelector('.rps__btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const userChoice = button.dataset.choice;
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        const result = generateWinner(userChoice, computerChoice);
    });
});

function generateWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        winner.textContent = 'Нічия';
        winner.style.volor = '#000';
    } else if (
        (userChoice === 'камінь' && computerChoice === 'ножиці') ||
        (userChoice === 'ножиці' && computerChoice === 'папір') ||
        (userChoice === 'папір' && computerChoice === 'камінь')
    ) {
        winner.textContent = 'Ви виграли раунд!';
        winner.style.color = '#039900';
        playerScore.textContent += 1;
    } else {
        winner.textContent = 'Комп’ютер виграв раунд!';
        winner.style.color = '#FF0000';
        computerScore.textContent += 1;
    }
}

resultBtn.addEventListener('click', () => {
    computerChoice.style.borderColor = '#FF0000';
})