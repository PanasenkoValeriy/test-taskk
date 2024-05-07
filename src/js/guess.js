const btn = document.getElementById('guess__btn');
const input = document.getElementById('guess__input');
const text = document.getElementById('text');
const form = document.getElementById('guess__form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    onBtnClick();
});

input.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        onBtnClick();
    }
});

btn.addEventListener('click', onBtnClick);

function onBtnClick() {
    const randomNum = Math.floor(Math.random() * 10 + 1);
    let userNum = Number(input.value);
    if (userNum === randomNum) {
        text.textContent = `Вітаю, ви вгадали число ${randomNum}!`;

    }
}