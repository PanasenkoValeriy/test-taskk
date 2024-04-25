const calculatorButtons = document.querySelectorAll(".calculator-button");
const calculatorOutput = document.querySelector(".calculator-output");
const checkButton = (buttons) =>
  [...buttons].map((btn) => {
    if (btn.classList.contains("active-calc-btn")) {
      return btn.classList[1];
    }
  });

calculatorButtons.forEach((button) => {
  // console.log(button.classList)
  button.addEventListener("click", () => {
    calculatorButtons.forEach((btn) => {
      btn.classList.remove("active-calc-btn");
    });
    button.classList.toggle("active-calc-btn");
    console.log(checkButton(calculatorButtons));
  });
});

const firstCalculatorInput = document.querySelector(".first-calculator-input");
const secondCalculatorInput = document.querySelector(
  ".second-calculator-input"
);
const calculateResult = () => {
  const firstInputValue = Number(firstCalculatorInput.value);
  const secondInputValue = Number(secondCalculatorInput.value);

  if (checkButton(calculatorButtons).includes("plus")) {
    calculatorOutput.textContent = firstInputValue + secondInputValue;
  }
   else if (checkButton(calculatorButtons).includes("minus")) {
    calculatorOutput.textContent = firstInputValue - secondInputValue;
  }
  
     else if (checkButton(calculatorButtons).includes("divide")) {
    calculatorOutput.textContent = firstInputValue / secondInputValue;
  }
  
     else if (checkButton(calculatorButtons).includes("multiply")) {
    calculatorOutput.textContent = firstInputValue * secondInputValue;
  }
  
};



firstCalculatorInput.addEventListener("input", calculateResult);
secondCalculatorInput.addEventListener("input", calculateResult);
