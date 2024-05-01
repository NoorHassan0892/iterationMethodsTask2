// You are given an array representing a series of transactions in a small business.
// Each transaction is an array containing the transaction type ("income" or "expense") and the amount.
const transactions = [
  ["income", 1000],
  ["income", 1500],
  ["expense", 500],
  ["expense", 300],
  ["income", 700],
];

/*****************************************************************
Part 1: Transaction Analysis

Task 1) Create a new array containing only the income transactions.
       Output 1) [["income", 1000], ["income", 1500], ["income", 700]]
Task 2) Create a new array containing only the expense transactions.
       Output 2) [["expense", 500], ["expense", 300]]

******************************************************************/
const Task1 = transactions.filter((num) => {
  if (num[0] == "income") {
    return true;
  } else {
    return false;
  }
});
console.log(Task1);

const Task2 = transactions.filter((num) => {
  if (num[0] == "expense") {
    return true;
  } else {
    return false;
  }
});
console.log(Task2);
/*****************************************************************
Part 2: Financial Summary

Task 3) Calculate the total income and return it.
       Output 3) 3200

Task 4) Calculate the total expenses and return it.
       Output 4) 800

******************************************************************/
let sum = 0;
const Task3 = Task1.forEach((num) => {
  sum = sum + num[1];
});
console.log(sum);

let sum2 = 0;
const Task4 = Task2.forEach((num) => {
  sum2 = sum2 + num[1];
});
console.log(sum2);

/*****************************************************************
Part 3: Net Analysis

Task 5) Calculate the net total (total income - total expenses) and return it.
       Output 5) 2400

Task 6) Identify and create a new array with transactions (both incomes and expenses) above $500.
       Output 6) [["income", 1000], ["income", 1500]]

******************************************************************/
let sum3 = sum - sum2;

console.log(sum3);

let Task6 = transactions.filter((num) => {
  if (num[1] > 500) {
    return true;
  } else {
    return false;
  }
});
console.log(Task6);
// Note: Use appropriate JavaScript array iteration methods such as filter, reduce, etc., to achieve the desired output for each task.
