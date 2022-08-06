import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  // use destructuring to get the budget from context
  const { budget } = useContext(AppContext);
  return (
    // Bootstrap Alert classes to gives us a gray background
    <div className="alert alert-secondary">
      <span>Budget: £{budget}</span>
    </div>
  );
};
export default Budget;
