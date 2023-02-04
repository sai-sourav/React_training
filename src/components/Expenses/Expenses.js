import ExpenseItem from "./ExpenseItem";
import Expensesfilter from "./Expensesfilter";
import "./Expenses.css";
import Card from '../UI/Card';
import { useState } from "react";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2022');

  const filterChangeHandler = selectedyear => {
    setFilteredYear(selectedyear);
  }
  return (
    <Card className="expenses">
      <Expensesfilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
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
