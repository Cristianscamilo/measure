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
    discountedPrice: "",
    selectOption: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    setBudgetList([...budgetList, product]);
    //console.log(budgetList);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    const newValue =
      name === "unitPrice" || name === "quantity" || name === "discountedPrice"
        ? parseInt(value)
        : value;
    setProduct({ ...product, [name]: newValue });
  };

  const handleSelectChange = (selectOption)=> {
    setProduct({...product, selectOption: selectOption.value});
  }

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
        handleSelectChange={handleSelectChange}
      />
    </>
  );
};

export default BudgetContainer;
