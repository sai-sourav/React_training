import './ExpenseDate.css'

const ExpenseDate = (props) => {
  const Month = props.ExpenseDate.toLocaleDateString("en-US", {
    month: "long",
  });
  const Day = props.ExpenseDate.toLocaleDateString("en-US", { day: "2-digit" });
  const Year = props.ExpenseDate.getFullYear();
  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{Month}</div>
      <div className='expense-date__year'>{Year}</div>
      <div className='expense-date__day'>{Day}</div>
    </div>
  );
}

export default ExpenseDate;
