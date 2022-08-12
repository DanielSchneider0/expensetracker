import { useState } from "react";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "../Filter/ExpenseFilter";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [yearSelected, setYearSelected] = useState("2022");
  const addYearSelected = (onYearChange) => {
    setYearSelected(onYearChange);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === yearSelected;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={yearSelected}
          saveYearSelected={addYearSelected}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
