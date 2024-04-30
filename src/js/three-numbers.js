const firstDigitInput = document.querySelector('.first-digits-input');
const secondDigitInput = document.querySelector('.second-digits-input');
const thirdDigitInput = document.querySelector('.third-digits-input');
const digitOutput = document.querySelector('.digit-output-number');
const fullDigitOutput = document.querySelector('.digits-output')


const biggestDigit = () => {
    const firstDigitInputValue = Number(firstDigitInput.value);
    const secondDigitInputValue = Number(secondDigitInput.value);
    const thirdDigitInputValue = Number(thirdDigitInput.value);

    if (isNaN(Math.max(firstDigitInputValue, secondDigitInputValue, thirdDigitInputValue))) {
        digitOutput.textContent = '';
        fullDigitOutput.textContent = "Помилка!"
        fullDigitOutput.style.fontWeight = 'bold';
        fullDigitOutput.style.fontStyle = 'italic';

    }
    else {
        digitOutput.textContent = Math.max(firstDigitInputValue, secondDigitInputValue, thirdDigitInputValue)
    }
}


firstDigitInput.addEventListener('input', biggestDigit);
secondDigitInput.addEventListener('input', biggestDigit);
thirdDigitInput.addEventListener('input', biggestDigit)


