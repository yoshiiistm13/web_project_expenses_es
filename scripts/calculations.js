let budgetValue = 0;
let totalExpensesValue = 0;
let expenseEntries = [
  ["groceries", 33],
  ["restaurants", 50],
  ["transport", 12],
  ["home", 70],
  ["subscriptions", 14],
  ["groceries", 28],
  ["subscriptions", 12],
];

let balanceColor = "green";

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
  return budgetValue - totalExpensesValue;
}

function updateBalanceColor() {
  const balance = calculateBalance();

  if (balance < 0) {
    // Saldo negativo = rojo
    balanceColor = "red";
  } else if (balance < budgetValue * 0.25) {
    // Menos del 25% del presupuesto = naranja
    balanceColor = "orange";
  } else {
    // Saldo saludable = verde (por defecto)
    balanceColor = "green";
  }
}

function calculateCategoryExpenses(category) {
  let totalExpensesValue = 0;
  for (let item of expenseEntries)
    if (item[0] === category) {
      totalExpensesValue += item[1];
    }
  return totalExpensesValue;
}
