import { createContext, useState } from "react";

export const BudgetContext = createContext();

const BudgetContextProvider = ({ children }) => {
  const [budgetList, setBudgetList] = useState([]);

  let data = {
    budgetList,
    setBudgetList,
  };

  console.log(budgetList);
  return (
    <BudgetContext.Provider value={data}>{children}</BudgetContext.Provider>
  );
};

export default BudgetContextProvider;
