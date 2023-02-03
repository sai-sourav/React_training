import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from '../UI/Card';
import { useState } from "react";

const ExpenseItem = (props) => {
  const [amount, updateamount] = useState(props.amount)
  const ClickHandler = (e) => {
    updateamount(100);
    // const item = document.getElementById(e.target.id).parentElement;
    // item.parentElement.removeChild(item);
  }
  return (
    <Card className="expense-item">
      <ExpenseDate ExpenseDate={props.ExpenseDate} />
      <ExpenseDetails LocationOfExpenditure={props.LocationOfExpenditure} amount={amount} />
      <button id={`del${props.Id}`} onClick={ClickHandler}>Update Expense</button>
    </Card>
  );
}

export default ExpenseItem;
