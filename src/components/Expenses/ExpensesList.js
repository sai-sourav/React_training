import './ExpensesList.css';
import ExpenseItem from "./ExpenseItem";
const ExpensesList = (props) => {
    if(props.items.length === 0){
        return (<h2 className='expenses-list__fallback'> No expenses to show </h2>)
    }

    return(
        <ul className='expenses-list'>
            {props.items.map((expense,index) => {
                return (
                    <li>
                        <ExpenseItem key={index+1}
                        ExpenseDate={expense.ExpenseDate}
                        LocationOfExpenditure={expense.LocationOfExpenditure}
                        amount={expense.amount}
                        />
                    </li>
                );
            })}
        </ul>
    )
}

export default ExpensesList