import "./ExpenseItem.css";

function ExpenseItem(props) {

  const doller="$"
  return (
    <div className="expense-item">
      <div>{props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price"> {doller}{props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
