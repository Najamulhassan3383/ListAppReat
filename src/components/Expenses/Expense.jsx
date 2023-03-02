import Card from "../UI/Card";
import "./Expense.css";
import ExpenseItem from "./ExpenseItem";
import NewExpense from "../NewExpense/NewExpense";
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpenseChart from "./ExpenseChart";
let id = 1;
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
  const [expense, setExpense] = useState(expenses);

  const handleAdd = (data) => {
    const expenseData = {
      ...data,
      id: (Math.random() * 1000).toFixed(0).toString(),
    };
    console.log("i am from expense.jsx");
    console.log(expenseData);
    setExpense((prev) => {
      return [expenseData, ...prev];
    });
  };
  const selectYear = (value) => {
    setFilteryear(value);
  };
  const filterArray = expense.filter((exp) => {
    return exp.date.getFullYear().toString() === filteryear;
  });

  return (
    <>
      <NewExpense OnSaveDataToArray={handleAdd} />

      <Card className="expenses">
        <ExpensesFilter setyear={filteryear} handle={selectYear} />
        {filterArray.length === 0 && (
          <p style={{ color: "white" }}>No Items to Display</p>
        )}
        <ExpenseChart expenses={filterArray} />
        {ExpensesFilter.length > 0 &&
          filterArray.map((exp) => {
            id++;
            return <ExpenseItem key={id} obj={exp}></ExpenseItem>;
          })}
      </Card>
    </>
  );
}
