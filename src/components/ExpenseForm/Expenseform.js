import './Expenseform.css';
import ExpenseActions from './ExpenseActions';
import ExpenseInputs from './ExpenseInputs';

const ExpenseForm = () => {

  const submitform = (event) => {
    event.preventDefault();
    const inputs = {
      amount: event.target.amount.value,
      LOE: event.target.LOE.value,
      date: event.target.date.value
    }
    console.log(inputs);
  }
  return (
    <form onSubmit={submitform} id="addExpense" className="expenseform">
      <ExpenseInputs />
      <ExpenseActions />
    </form>
  );
}

export default ExpenseForm;
