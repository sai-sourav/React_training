import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from '../UI/Card';

const Expenses = () => {
  const expenses = [
    { ExpenseDate: new Date(), LocationOfExpenditure: "Food", amount: 200 },
    { ExpenseDate: new Date(), LocationOfExpenditure: "Petrol", amount: 100 },
    { ExpenseDate: new Date(), LocationOfExpenditure: "Movie", amount: 200 },
  ];
  return (
    <Card className="expenses">
      {expenses.map((expense) => {
        return (
          <ExpenseItem
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
