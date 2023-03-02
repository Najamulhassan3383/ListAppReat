import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

export default function NewExpense({ OnSaveDataToArray }) {
  const [isEditing, setIsEditing] = useState(false);
  const handleSave = (data) => {
    const expenseData = {
      ...data,
      id: (Math.random() * 1000).toFixed(0).toString(),
    };
    OnSaveDataToArray(expenseData);
  };

  const handleClick = () => {
    setIsEditing(true);
  };
  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={handleClick}>Add New Expense</button>}
      {isEditing && (
        <ExpenseForm onSaveData={handleSave} onCancel={handleCancel} />
      )}
      {/* <button onClick={handleClick}>Add New Expense</button> */}
    </div>
  );
}
