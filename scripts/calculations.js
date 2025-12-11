let budgetValue = 0;
let totalExpensesValue = 0;

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

let expenseEntries = [
  ["groceries", 33],
  ["restaurants", 50],
  ["transport", 12],
  ["home", 70],
  ["subscriptions", 14],
  ["groceries", 28],
  ["subscriptions", 12],
];

function calculateLargestCategory() {
  let categoriesData = [];
  let categories = [
    "groceries",
    "restaurants",
    "transport",
    "home",
    "subscriptions",
  ];

  for (let category of categories) {
    categoriesData.push([category, calculateCategoryExpenses(category)]);
  }
  let winnerCategory = "";
  let winnerNumber = 0;

  for (let i = 0; i < categoriesData.length; i++) {
    const currentData = categoriesData[i];
    const currentName = currentData[0];
    const currentExpense = currentData[1];

    if (currentExpense > winnerNumber) {
      winnerNumber = currentExpense;
      winnerCategory = currentName;
    }
  }

  return winnerCategory;
}

function addExpenseEntry(expenseInput) {
  expenseEntries.push(expenseInput);

  const expenseAmount = expenseInput[1];

  totalExpensesValue += expenseAmount;
}
