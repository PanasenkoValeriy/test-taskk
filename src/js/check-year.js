const button = document.querySelector('.search-button');
const input = document.querySelector('.check-input');
const result = document.querySelector('.check-text');

button.addEventListener('click', showResult);

function showResult() {
    if(input.value !== '') {
        if(input.value % 4 === 0) {
            result.textContent = 'Ви народилися у високосний рік!';
            result.style.color = '#00BB00';
        } else {
            result.textContent = 'Ви народилися не у високосний рік!';
            result.style.color = '#FF0000';
        }
    } else {
        result.textContent = 'Введіть рік народження!'
        result.style.color = '#FF0000';
    }

    input.value = '';
}