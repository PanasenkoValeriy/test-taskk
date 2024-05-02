const userButtons = document.querySelector('.rps__list');
const winnerText = document.querySelector('.winner');
const computerScore = document.getElementById('comp__score');
const playerScore = document.getElementById('player__score');
const resultBtn = document.querySelector('.rps__btn');

let compWin = 0;
let userWin = 0;

function compChoiceMarkup(choice) {
    if (choice === 'rock') {
        resultBtn.innerHTML = '<img src="/img/rock.svg"/>';
    } else if (choice === 'scissors') {
        resultBtn.innerHTML = '<img src="/img/scissors.svg"/>';
    } else if (choice === 'paper') {
        resultBtn.innerHTML = '<img src="/img/paper.svg"/>';
    } else {
        resultBtn.innerHTML = '';
    }
}

userButtons.addEventListener('click', (e) => {
    const choices = ['rock', 'scissors', 'paper'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    console.log(e.target.alt);
    compChoiceMarkup(computerChoice);

     if (e.target.alt === computerChoice) {
        winnerText.textContent = 'Нічия';
        winnerText.style.volor = '#000';
    } else if (
        (e.target.alt === 'rock' && computerChoice === 'scissors') ||
        (e.target.alt === 'scissors' && computerChoice === 'paper') ||
        (e.target.alt === 'paper' && computerChoice === 'rock')
    ) {
        winnerText.textContent = 'Ви виграли раунд!';
        winnerText.style.color = '#039900';
        playerScore.textContent = userWin += 1;
    } else {
        winnerText.textContent = 'Комп’ютер виграв раунд!';
        winnerText.style.color = '#FF0000';
        computerScore.textContent = compWin += 1;
    }
});