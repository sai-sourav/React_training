import { useState } from 'react';
import './ExpenseInputs.css';

const ExpenseInputs = (props) => {
  const [title, enteredTitle] = useState("title");
  const [Amount, enteredAmount] = useState(100);
  const [Date, enteredDate] = useState("");

  // const [userInput, updatedUserInput] = useState({
  //   enteredTitle : '',
  //   enteredAmount : '',
  //   enteredDate : ''
  // })

  const addamount = (e) => {
    // console.log(e.target.value);
    enteredAmount(200);
    // updatedUserInput({
    //   ...userInput,
    //   enteredAmount : 200
    // })

    // recommonded if updatestate depends on prevstate
    // updatedUserInput((prevState) => {
    //   return{
    //     ...prevState,
    //     enteredAmount : 200
    //   }
    // })
  }

  const addLOE = (e) => {
    enteredTitle("updated title");
    // updatedUserInput({
    //   ...userInput,
    //   enteredTitle : "updated title"
    // })
  }

  const adddate = (e) => {
    enteredDate("2023-01-01");
    // updatedUserInput({
    //   ...userInput,
    //   enteredDate : "2023-01-01"
    // })
  }

    return(
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label for="amount">Amount: </label>
          <input type="number" onChange={addamount} name="amount" id="amount"></input><br />
        </div>
        <div className='new-expense__control'>
          <label for="LOE">Type of Expense: </label>
          <input type="text" onChange={addLOE} name="LOE" id="LOE"></input><br />
        </div>
        <div className='new-expense__control'>
          <label for="date">Date: </label>
          <input type="date" onChange={adddate} name="date" id="date"></input><br />
        </div>
      </div>
    )
}

export default ExpenseInputs;