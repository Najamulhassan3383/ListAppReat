import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

export default function NewExpense({ OnSaveDataToArray }) {
  const handleSave = (data) => {
    const expenseData = {
      ...data,
      id: (Math.random() * 1000).toFixed(0).toString(),
    };
    OnSaveDataToArray(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm OnSaveData={handleSave} />
    </div>
  );
}
