import './Expenseform.css';
import { useState } from 'react';

const ExpenseForm = (props) => {

  const [title, enteredTitle] = useState("");
  const [Amount, enteredAmount] = useState('');
  const [date, enteredDate] = useState("");

  const [showform, changeform] = useState(false);

  // const [userInput, updatedUserInput] = useState({
  //   enteredTitle : '',
  //   enteredAmount : '',
  //   enteredDate : ''
  // })

  const addamount = (e) => {
    // console.log(e.target.value);
    enteredAmount(e.target.value);
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
    enteredTitle(e.target.value);
    // updatedUserInput({
    //   ...userInput,
    //   enteredTitle : "updated title"
    // })
  }

  const adddate = (e) => {
    enteredDate(e.target.value);
    // updatedUserInput({
    //   ...userInput,
    //   enteredDate : "2023-01-01"
    // })
  }


  const submitform = (event) => {
    event.preventDefault();
    const inputs = {
      amount: +Amount,
      LocationOfExpenditure: title,
      ExpenseDate: new Date(date)
    }
    enteredAmount('');
    enteredDate("");
    enteredTitle("");
    props.callbackfromparent(inputs);
    changeform(false);
  }


  if(showform === false){
    return (
      <form  id="addExpense" className="expenseform">
        <div className='add-new-expense__action'>
          <button onClick={() => changeform(true)}>Add New Expense</button>
        </div>
      </form>
    )
  }


  return (
    <form onSubmit={submitform} id="addExpense" className="expenseform">
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label htmlFor="amount">Amount: </label>
          <input type="number" value={Amount} onChange={addamount} name="amount" id="amount"></input><br />
        </div>
        <div className='new-expense__control'>
          <label htmlFor="LOE">Type of Expense: </label>
          <input type="text" value={title} onChange={addLOE} name="LOE" id="LOE"></input><br />
        </div>
        <div className='new-expense__control'>
          <label htmlFor="date">Date: </label>
          <input type="date" value={date} onChange={adddate} name="date" id="date"></input><br />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button onClick={() => changeform(false)} id="cancel">Cancel</button>
        <button type="submit" id="addexpense">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
