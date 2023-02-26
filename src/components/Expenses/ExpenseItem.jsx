import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem({ obj }) {
  return (
    <Card className="expense-item ">
      <ExpenseDate date={obj.date} />
      <div className="expense-item__description">
        <h2 className="expense-item h2">{obj.title}</h2>
        <div className="expense-item__price">${obj.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
