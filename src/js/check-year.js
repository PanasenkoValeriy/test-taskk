const button = document.querySelector('.check-btn-js');
const input = document.querySelector('.check-input');
const result = document.querySelector('.check-text');

button.onclick = function showResult() {
    if(input.value % 4 === 0 && input.value > 0) {
        result.textContent = 'Ви народилися у високосний рік!';
        result.style.color = '#00BB00';
    } else if(input.value % 4 !== 0) {
        result.textContent = 'Ви народилися не у високосний рік!';
        result.style.color = '#FF0000';
    } else {
        result.textContent = 'Введіть рік народження!'
        result.style.color = '#FF0000';
    }

    input.value = '';
}