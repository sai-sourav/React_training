import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {ExpenseDate: new Date(), LocationOfExpenditure: "Food", amount: 20},
    {ExpenseDate: new Date(), LocationOfExpenditure: "Petrol", amount: 100},
    {ExpenseDate: new Date(), LocationOfExpenditure: "Movie", amount: 200}
  ]

  return (
    <div>
      <h2>Expenses</h2>
        {expenses.map(expense => {
          return <ExpenseItem ExpenseDate={expense.ExpenseDate} LocationOfExpenditure={expense.LocationOfExpenditure} amount={expense.amount}></ExpenseItem>
        })}
    </div>
  );
}

export default App;
