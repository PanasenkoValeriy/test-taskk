const lupa = document.querySelector('.check-search-button');
const input = document.querySelector('.check-input');
const result = document.querySelector('.check-text');

lupa.addEventListener('click', showResult);

function showResult() {
    if(input.value % 4 === 0) {
        result.textContent = 'Ви народилися у високосний рік!';
        result.style.color = 'green';
    } else {
        result.textContent = 'Ви народилися не у високосний рік!';
        result.style.color = 'red';
    }
}