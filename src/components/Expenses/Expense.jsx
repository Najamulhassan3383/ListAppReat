import Card from "../UI/Card";
import "./Expense.css";
import ExpenseItem from "./ExpenseItem";
import NewExpense from "../NewExpense/NewExpense";
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";
export default function Expense() {
  const [filteryear, setFilteryear] = useState("2020");
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const handleAdd = (data) => {
    const expenseData = {
      ...data,
      id: (Math.random() * 1000).toFixed(0).toString(),
    };
    console.log("i am from expense.jsx");
    console.log(expenseData);
  };
  const selectYear = (value) => {
    setFilteryear(value);
  };

  return (
    <>
      <NewExpense OnSaveDataToArray={handleAdd} />

      <Card className="expenses">
        <ExpensesFilter handle={selectYear} />
        <ExpenseItem obj={expenses[0]}></ExpenseItem>
        <ExpenseItem obj={expenses[1]}></ExpenseItem>
        <ExpenseItem obj={expenses[2]}></ExpenseItem>
        <ExpenseItem obj={expenses[3]}></ExpenseItem>
      </Card>
    </>
  );
}
