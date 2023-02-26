import React from "react";
import "./ExpenseDate.css";
import Card from "../UI/Card";

export default function ExpenseDate(prop) {
  const month = prop.date.toLocaleString("en-US", { month: "long" });
  const day = prop.date.toLocaleString("en-US", { day: "2-digit" });
  const year = prop.date.toLocaleString("en-US", { year: "numeric" });
  return (
    <Card className="expense-date ">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </Card>
  );
}
