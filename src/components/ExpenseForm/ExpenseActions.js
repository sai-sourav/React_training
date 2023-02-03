import './ExpenseActions.css';

const ExpenseActions = () => {

  const clickhandler = (e) => {
    e.preventDefault();
    console.log("clicked add expense");
  }
  return(
    <div className='new-expense__actions'>
      <button onClick={clickhandler} id="addexpense">Add Expense</button>
    </div>
  )
}

export default ExpenseActions;