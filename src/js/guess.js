const btn = document.getElementById('guess__btn');
const input = document.getElementById('guess__input');
const text = document.getElementById('text');

btn.addEventListener('click', onBtnClick);

function onBtnClick() {
    const randomNum = Math.floor(Math.random() * 10 + 1);
    let userNum = Number(input.value);
    if (userNum === randomNum) {
        text.textContent = `Вітаю, ви вгадали число ${randomNum}!`;
        text.style.color = '#039900'
    } else if (userNum < 1 || userNum > 10) {
        text.textContent = 'Введіть число від 1 до 10!';
        text.style.color = '#900';
    }
    else if (userNum !== randomNum) {
        text.textContent = `Ви програли, комп’ютер загадав ${randomNum}`;
        text.style.color = '#900';
    } else {
        text.textContent = 'Це не число!';
        text.style.color = '#900';
    }
}