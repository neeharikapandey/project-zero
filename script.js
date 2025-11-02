// A. SELECT ELEMENTS (DOM Selection)
// We get references to the elements using their unique IDs from the HTML.
const billInput = document.getElementById('bill-amount');
const tipInput = document.getElementById('tip-percentage');
const calculateBtn = document.getElementById('calculate-btn');
const tipOutput = document.getElementById('tip-output');
const totalOutput = document.getElementById('total-output');

// B. DEFINE THE CORE FUNCTION
function calculateTip() {
    // 1. Get input values and convert them to numbers
    // The "+" sign converts the string value from the input field into a number.
    const billAmount = +billInput.value;
    const tipPercentage = +tipInput.value;

    // Basic Validation
    if (billAmount <= 0 || tipPercentage <= 0) {
        // Simple error handling
        tipOutput.textContent = 'Error: Invalid Input';
        totalOutput.textContent = 'Error: Invalid Input';
        return; 
    }

    // 2. LOGIC: Calculate the tip and total
    const tipAmount = billAmount * (tipPercentage / 100);
    const totalBill = billAmount + tipAmount;

    // 3. DISPLAY OUTPUT (DOM Manipulation)
    // We update the content of the output <span>s, formatted to 2 decimal places.
    tipOutput.textContent = '$' + tipAmount.toFixed(2);
    totalOutput.textContent = '$' + totalBill.toFixed(2);
}

// C. ATTACH EVENT LISTENER
// This makes the whole thing interactive: when the button is clicked, run the function.
calculateBtn.addEventListener('click', calculateTip);