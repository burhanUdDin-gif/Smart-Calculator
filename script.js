const expression = document.querySelector(".expression");
const result = document.querySelector(".result");

const buttons = document.querySelectorAll(".btn");

let currentExpression = "";

buttons.forEach((button) => {
    button.addEventListener("click", () => {

        const value = button.dataset.val;
        if (value === "AC") {
            currentExpression = "";
            expression.textContent = "";
            result.textContent = "0";
            return;
        }
        if (value === "=") {
            try {
                let calculateExpression = currentExpression.replaceAll("X", "*");
                let answer = eval(calculateExpression);
                result.textContent = answer;
            } catch {
                result.textContent = "Error";
            }

            return;
        }
        if (value === "( )") {

            const openBrackets =
                (currentExpression.match(/\(/g) || []).length;

            const closeBrackets =
                (currentExpression.match(/\)/g) || []).length;

            if (openBrackets === closeBrackets) {
                currentExpression += "(";
            } else {
                currentExpression += ")";
            }

            expression.textContent = currentExpression;
            return;
        }
        currentExpression += value;
        expression.textContent = currentExpression;
    });
});