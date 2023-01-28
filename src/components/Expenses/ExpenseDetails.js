import "./ExpenseDetails.css";
const ExpenseDetails = (props) => {
  return(<div>
    <div className="expense-item__description">
      <div className="expense-item__LOE">{`LOE: ${props.LocationOfExpenditure}`}</div>
      <p className="expense-item__price">{`Price: ${props.amount}`}</p>
    </div>
  </div>);
}

export default ExpenseDetails;
