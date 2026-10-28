
/*
SpendWise Budget Calculator
Purpose: Calculate a user's remaining budget.
*/

// 1. Store application data using variables
let budget = 0;
let totalExpenses = 0;
let remainingBalance = 0;

// 2. Function to calculate total expenses
function calculateTotalExpenses(expense1, expense2, expense3) {
    return expense1 + expense2 + expense3;
}

// 3. Function to calculate the remaining balance
function calculateRemainingBalance(budget, expenses) {
    return budget - expenses;
}

// 4. Collect user input
let budgetInput = prompt("Enter your total budget:");

let expense1Input = prompt("Enter your first expense:");
let expense2Input = prompt("Enter your second expense:");
let expense3Input = prompt("Enter your third expense:");

// 5. Convert user input from text to numbers
budget = Number(budgetInput);
let expense1 = Number(expense1Input);
let expense2 = Number(expense2Input);
let expense3 = Number(expense3Input);

// 6. Calculate the budget
totalExpenses = calculateTotalExpenses(
    expense1,
    expense2,
    expense3
);

remainingBalance = calculateRemainingBalance(
    budget,
    totalExpenses
);

// 7. Display clearly labeled results
console.log("===== SpendWise Budget Report =====");
console.log("Total Budget: " + budget.toFixed(2));
console.log("First Expense: " + expense1.toFixed(2));
console.log("Second Expense: " + expense2.toFixed(2));
console.log("Third Expense: " + expense3.toFixed(2));
console.log("Total Expenses: " + totalExpenses.toFixed(2));
console.log("Remaining Balance: " + remainingBalance.toFixed(2));
console.log("===================================");
