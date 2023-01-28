import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from '../UI/Card';

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate ExpenseDate={props.ExpenseDate} />
      <ExpenseDetails LocationOfExpenditure={props.LocationOfExpenditure} amount={props.amount} />
    </Card>
  );
}

export default ExpenseItem;
