import Expensesfilter from "./Expensesfilter";
import "./Expenses.css";
import Card from '../UI/Card';
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2023');

  const filterChangeHandler = selectedyear => {
    setFilteredYear(selectedyear);
  }

  const filteredExpenses = props.expenses.filter((expense) => {return expense.ExpenseDate.getFullYear().toString() === filteredYear });

  
  return (
    <Card className="expenses">
      <Expensesfilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      <ExpensesChart expenses={filteredExpenses} />
      {/* conditional rendering type 1: using terinnary operator*/}
      {/* {filteredExpenses.length === 0 ? (<p>No expenses to show</p>) : (
          filteredExpenses.map((expense,index) => {
            return (
              <ExpenseItem key={index+1}
                ExpenseDate={expense.ExpenseDate}
                LocationOfExpenditure={expense.LocationOfExpenditure}
                amount={expense.amount}
              />
            );
          })
       ) } */}

       {/* conditional rendering type 2: using && operator*/}
       {/* {filteredExpenses.length === 0 && <p>No expenses to show</p>}
       {filteredExpenses.length > 0 && 
            filteredExpenses.map((expense,index) => {
            return (
              <ExpenseItem key={index+1}
                ExpenseDate={expense.ExpenseDate}
                LocationOfExpenditure={expense.LocationOfExpenditure}
                amount={expense.amount}
              />
            );
          })
        } */}

        {/* conditional rendering type 3: using condition in js*/}
        {/* {expenseslist} */}

        <ExpensesList items={filteredExpenses} />
        {filteredExpenses.length === 1 && <h2 className="oneexpenseonly">Only single Expense here. Please add more...</h2>}
    </Card>
  );
}

export default Expenses;
