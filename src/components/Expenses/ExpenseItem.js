import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from '../UI/Card';

const ExpenseItem = (props) => {
  const ClickHandler = (e) => {
    console.log("clicked");
    console.log(e.target.id);
    const item = document.getElementById(e.target.id).parentElement;
    item.parentElement.removeChild(item);
  }
  return (
    <Card className="expense-item">
      <ExpenseDate ExpenseDate={props.ExpenseDate} />
      <ExpenseDetails LocationOfExpenditure={props.LocationOfExpenditure} amount={props.amount} />
      <button id={`del${props.Id}`} onClick={ClickHandler}>Delete Expense</button>
    </Card>
  );
}

export default ExpenseItem;
