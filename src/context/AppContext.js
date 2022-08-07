import React, { useReducer } from "react";
const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case "DELETE_EXPENSE":
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense.id !== action.payload
        ),
      };
    case "SET_BUDGET":
      return {
        ...state,
        budget: action.payload,
      };
    default:
      return state;
  }
};

const initialState = {
  budget: 2000,
  expenses: [
    { id: 12, name: "shopping", cost: 40 },
    { id: 13, name: "holiday", cost: 400 },
    { id: 14, name: "car service", cost: 50 },
  ],
};

export const AppContext = React.createContext();

export const AppProvider = (props) => {
  // Setting up the useReducer hook which will hold our state, and allow us to update the state via dispatch
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    // This has a value prop which contains the data which we allow our components to see and have access to, as well as the dispatch function that lets us update the state by dispatching actions
    <AppContext.Provider
      value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
