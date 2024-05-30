import { createContext, useState } from "react";

export const BudgetContext = createContext();

const BudgetContextProvider = ({ children }) => {
  const [budgetList, setBudgetList] = useState([]);

  console.log(budgetList);

  const removeByName = (productName) => {
    let newBudget = budgetList?.filter((element)=> element.productName !== productName)
    setBudgetList(newBudget);
  }

  

  let data = {
    budgetList,
    setBudgetList,
    removeByName
  };

  return (
    <BudgetContext.Provider value={data}>{children}</BudgetContext.Provider>
  );
};

export default BudgetContextProvider;
