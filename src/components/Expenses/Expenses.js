import ExpenseItem from "./ExpenseItem";
import Expensesfilter from "./Expensesfilter";
import "./Expenses.css";
import Card from '../UI/Card';
import { useState } from "react";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2023');

  const filterChangeHandler = selectedyear => {
    setFilteredYear(selectedyear);
  }

  const filteredExpenses = props.expenses.filter((expense) => {return expense.ExpenseDate.getFullYear().toString() === filteredYear })
  return (
    <Card className="expenses">
      <Expensesfilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      {filteredExpenses.map((expense,index) => {
        return (
          <ExpenseItem key={index+1}
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
