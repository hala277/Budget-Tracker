import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import ViewBudget from "./ViewBudget";
import EditBudget from "./EditBudget";

const Budget = () => {
  // use destructuring to get the budget from context
  const { budget, dispatch } = useContext(AppContext);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = (value) => {
    dispatch({
      type: "SET_BUDGET",
      payload: value,
    });
    setIsEditing(false);
  };
  return (
    // Bootstrap Alert classes to gives us a gray background
    <div className="alert alert-secondary p-3 d-flex align-items-center justify-content-between">
      {isEditing ? (
        <EditBudget handleSaveClick={handleSaveClick} budget={budget} />
      ) : (
        <ViewBudget handleEditClick={handleEditClick} budget={budget} />
      )}
    </div>
  );
};
export default Budget;
