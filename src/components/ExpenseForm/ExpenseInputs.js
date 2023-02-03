import './ExpenseInputs.css';

const ExpenseInputs = () => {
    return(
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label for="amount">Amount: </label>
          <input type="number" name="amount" id="amount"></input><br />
        </div>
        <div className='new-expense__control'>
          <label for="LOE">Type of Expense: </label>
          <input type="text"  name="LOE" id="LOE"></input><br />
        </div>
        <div className='new-expense__control'>
          <label for="date">Date: </label>
          <input type="date" name="date" id="date"></input><br />
        </div>
      </div>
    )
}

export default ExpenseInputs;