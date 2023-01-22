import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <h2>{props.ExpenseDate.toLocaleDateString()}</h2>
      <div className="expense-item__description">
        <div className="expense-item__description">{props.LocationOfExpenditure}</div>
        <p className="expense-item__price">{props.amount}</p>
      </div>
    </div>
  );
}

export default ExpenseItem;
