import './ExpenseActions.css';

const ExpenseActions = (props) => {

  // const clickhandler = (e) => {
  //   e.preventDefault();
  //   console.log("clicked add expense");
  // }
  return(
    <div className='new-expense__actions'>
      <button type="submit" id="addexpense">Add Expense</button>
    </div>
  )
}

export default ExpenseActions;