import { useContext, useState } from "react";
import Budget from "./Budget";
import { BudgetContext } from "../../context/BudgetContext";

const BudgetContainer = () => {
  const { budgetList, setBudgetList } = useContext(BudgetContext);
const [product, setProduct] = useState({
  category: "",
  productName: "",
  unitPrice: "",
  quantity: "",
})
  const handleSubmit = (event) => {
    event.preventDefault();
    setBudgetList([...budgetList, product])
    console.log(budgetList.length);
  };
  const handleChange = (event) => {
    setProduct({...product, [event.target.name]: event.target.value});
    
  };

  return (
    <>
      <h3
        style={{
          width: "350px",
          margin: "20px 10px 20px 30px",
          fontSize: "60px",
          fontFamily: "var(--font-settings)",
        }}
      >
        Budget
      </h3>
      <Budget
        budgetList={budgetList}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
    </>
  );
};

export default BudgetContainer;


