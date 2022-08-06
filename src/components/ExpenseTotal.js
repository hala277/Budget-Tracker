import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ExpenseTotal = () => {
  const { expenses } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);
  return (
    // Using the Bootstrap Alert classes to gives us a blue background
    <div className="alert alert-primary">
      <span>Spent so far: £{totalExpenses}</span>
    </div>
  );
};

export default ExpenseTotal;
