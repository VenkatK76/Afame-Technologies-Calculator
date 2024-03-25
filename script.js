let output = '0';
let display = document.querySelector('.display');
const button = document.querySelectorAll("button");

display.value = output;
output = '';

for(let i=0; i<button.length; i++) {
    
    button[i].addEventListener("click", () => {
        const buttonValue = button[i].textContent;
         console.log(buttonValue);
        
        if(buttonValue === "C") {
            clearResult();
        }
        else if(buttonValue === "=") {
            calculateResult();
        }
        else if(buttonValue === "%") {
            calculatePercentage();
        }
        else if(buttonValue === "backspace") {
            clearoutput();
        }
        else{
            updateOutput(buttonValue);
        }
    });
}

function clearResult() {
    output = '';
    display.value = '0';
}

function calculateResult() {
    result =eval(output);
    result = roundTo8DecimalsIfNeeded(result);
    output = result.toString();
    console.log(output);
    display.value = result;
}

function calculatePercentage() {
    const currentValue = parseFloat(output);
    const percentage = currentValue/100;
    output = percentage.toString();
    display.value = output;
}

function updateOutput(buttonValue) {
    if(buttonValue === 'x') {
        buttonValue = buttonValue.replace('x', '*');
    }
    output += buttonValue;
    display.value = output;
}

function roundTo8DecimalsIfNeeded(number) {
    const decimals = (number.toString().split('.')[1] || []).length;
    return decimals > 8 ? parseFloat(number.toFixed(8)).toString() : number.toString();
}

function clearoutput() {
    output = output.slice(0, -1);
    display.value = output;
}
