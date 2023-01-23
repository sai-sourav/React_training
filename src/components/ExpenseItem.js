import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate ExpenseDate={props.ExpenseDate}></ExpenseDate>
      <ExpenseDetails LocationOfExpenditure={props.LocationOfExpenditure} amount={props.amount}></ExpenseDetails>
    </div>
  );
}

export default ExpenseItem;
