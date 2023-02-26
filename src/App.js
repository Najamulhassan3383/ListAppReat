import "./App.css";
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  return (
    <>
      <NewExpense />
      <Expense />
    </>
  );
}

export default App;
