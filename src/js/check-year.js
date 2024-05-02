const form = document.getElementById('check-form');
const input = document.querySelector('.check-input');
const result = document.querySelector('.check-text');

function showResult() {
    if (input.value % 4 === 0 && input.value > 0) {
        result.textContent = 'Ви народилися у високосний рік!';
        result.style.color = '#00BB00';
    } else if (input.value % 4 !== 0) {
        result.textContent = 'Ви народилися не у високосний рік!';
        result.style.color = '#DD0000';
    } else {
        result.textContent = 'Введіть рік народження!';
        result.style.color = '#DD0000';
    }

    input.value = '';
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    showResult();
});

input.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        showResult();
    }
});