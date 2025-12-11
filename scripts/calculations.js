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

// Este bucle inicial suma los gastos iniciales
for (let i = 0; i < expenseEntries.length; i++) {
  totalExpensesValue += expenseEntries[i][1];
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
    balanceColor = "red";
  } else if (balance < budgetValue * 0.25) {
    balanceColor = "orange";
  } else {
    balanceColor = "green";
  }
}

// *** FUNCIÓN CORREGIDA 1 ***
function calculateCategoryExpenses(category) {
  let categoryTotal = 0; // Cambiado el nombre de la variable para evitar confusión global
  for (let item of expenseEntries) {
    if (item[0] === category) {
      categoryTotal += item[1];
    }
  }
  return categoryTotal; // Devolvemos el total acumulado
}

// *** FUNCIÓN CORREGIDA 2 - Ajuste de inicialización ***
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

  // Inicializamos winnerNumber con un valor seguro (-Infinity)
  // para que siempre capture el primer gasto real.
  let winnerCategory = "";
  let winnerNumber = -Infinity;

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

// *** FUNCIÓN addExpenseEntry (ya estaba bien) ***
function addExpenseEntry(expenseInput) {
  expenseEntries.push(expenseInput);

  const expenseAmount = expenseInput[1];

  totalExpensesValue += expenseAmount;
}
