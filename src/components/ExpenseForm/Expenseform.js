import './Expenseform.css';
import ExpenseActions from './ExpenseActions';
import ExpenseInputs from './ExpenseInputs';

const ExpenseForm = () => {
  
  const addExpense = (e) => {
    console.log(e.target.value);
  }

  return (
    <form onChange={addExpense} id="addExpense" className="expenseform">
      <ExpenseInputs />
      <ExpenseActions />
    </form>
  );
}

export default ExpenseForm;
