const calculatorButton = document.querySelector('.calculator-button');
console.log(calculatorButton)
calculatorButton.addEventListener('click', () => {
    calculatorButton.classList.toggle('active-calc-btn')
})