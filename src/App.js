import Expenses from "../src/components/Expenses/Expenses"
import ExpenseForm from "../src/components/ExpenseForm/Expenseform"

const App = () => {
  return (
    <div>
      <h2>Expenses</h2>
      <ExpenseForm />
      <Expenses />
    </div>
  );
}

export default App;
