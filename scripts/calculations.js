budgetValue = 0;
totalExpensesValue = 0;
expenseEntries = [
  ["groceries", 33],
  ["restaurants", 50],
  ["transport", 12],
  ["home", 70],
  ["subscriptions", 14],
  ["groceries", 28],
  ["subscriptions", 12],
];

for (let i = 0; i < expenseEntries.length; i++) {
  totalExpensesValue += expenseEntries[i][1];
  //console.log("Valor total de los gastos: " + totalExpensesValue);
}

function calculateAverageExpense() {
  if (expenseEntries.length === 0) {
    return 0;
  } else return totalExpensesValue / expenseEntries.length;
}

function calculateBalance() {
  return (calculateBalance = budgetValue - totalExpensesValue);
}
