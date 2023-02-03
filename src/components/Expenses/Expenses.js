import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from '../UI/Card';

const Expenses = (props) => {
  
  return (
    <Card className="expenses">
      {props.expenses.map((expense,index) => {
        return (
          <ExpenseItem Id={index+1}
            ExpenseDate={expense.ExpenseDate}
            LocationOfExpenditure={expense.LocationOfExpenditure}
            amount={expense.amount}
          />
        );
      })}
    </Card>
  );
}

export default Expenses;
