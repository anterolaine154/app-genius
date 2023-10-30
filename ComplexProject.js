/*
Filename: ComplexProject.js
Content: A Complex Project
*/

// Declare and initialize variables
let initialAmount = 5000;
let monthlyInvestment = 100;
let annualInterestRate = 6;
let numberOfYears = 10;

// Calculate the future value of investment
let futureValue = calculateFutureValue(initialAmount, monthlyInvestment, annualInterestRate, numberOfYears);

// Display the future value
console.log("The future value of your investment is: $" + futureValue);

/**
 * Function to calculate the future value of an investment
 * @param {number} initialAmount - The initial investment amount
 * @param {number} monthlyInvestment - The monthly investment amount
 * @param {number} annualInterestRate - The annual interest rate in percentage
 * @param {number} numberOfYears - The number of years to calculate the future value
 * @returns {number} - The future value of the investment
 */
function calculateFutureValue(initialAmount, monthlyInvestment, annualInterestRate, numberOfYears) {
    // Convert annual interest rate to monthly interest rate
    let monthlyInterestRate = annualInterestRate / 100 / 12;
    // Calculate the total number of months
    let totalMonths = numberOfYears * 12;
    // Calculate the future value of investment
    let futureValue = initialAmount;
    for (let i = 1; i <= totalMonths; i++) {
        futureValue += monthlyInvestment;
        futureValue *= (1 + monthlyInterestRate);
    }
    return futureValue.toFixed(2);
}

// Additional complex code...
...
...
...
// End of code.