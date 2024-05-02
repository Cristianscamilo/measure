import { useContext } from "react";
import Budget from "./Budget";
import { BudgetContext } from "../../context/BudgetContext";
import { useCounter } from "../../../hooks/useShowPassword";
import { useFormik } from "formik";
import * as Yup from "yup"

const BudgetContainer = () => {
  const [addOne, SubOne, counter] = useCounter();
  const { budgetList, setBudgetList } = useContext(BudgetContext);
  const { handleSubmit, handleChange } = useFormik({
    initialValues: {
      category: "",
      productName: "",
      unitPrice: "",
      quantity: counter,
    },
    onSubmit: (data) => {
      setBudgetList([...budgetList,{...data, quantity: counter }]);
      
    },
    validationSchema: Yup.object({
      category: Yup.string().required(),
      productName: Yup.string().required(),
      unitPrice: Yup.number().required().min(2, "min 3"),
      quantity: Yup.number().required()
    }),
    validateOnChange: false,
  });

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
        addOne={addOne}
        SubOne={SubOne}
        counter={counter}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
    </>
  );
};

export default BudgetContainer;
