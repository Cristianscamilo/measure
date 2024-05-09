import { createContext, useState } from "react";

export const BudgetContext = createContext();

const BudgetContextProvider = ({ children }) => {
  const [budgetList, setBudgetList] = useState([]);

  console.log(budgetList);

  let data = {
    budgetList,
    setBudgetList,
  };

  return (
    <BudgetContext.Provider value={data}>{children}</BudgetContext.Provider>
  );
};

export default BudgetContextProvider;
