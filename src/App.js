import Expenses from "../src/components/Expenses/Expenses"
import ExpenseForm from "../src/components/ExpenseForm/Expenseform"
import { useState } from "react";

const App = () => {
  const [expenses, updateExpenses] = useState([
    { ExpenseDate: new Date(), LocationOfExpenditure: "Food", amount: 200 },
    { ExpenseDate: new Date(), LocationOfExpenditure: "Petrol", amount: 100 },
    { ExpenseDate: new Date(), LocationOfExpenditure: "Movie", amount: 200 },
  ]);
  
  function getformdata(data) {
    updateExpenses((prevState) => {return [...prevState, data]})
  }

  return (
    <div>
      <h2>Expenses</h2>
      <ExpenseForm callbackfromparent={getformdata}/>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
