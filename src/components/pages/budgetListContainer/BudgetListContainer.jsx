import BudgetList from "./BudgetList";
//import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./BudgetListContainer.module.css";
import { BudgetContext } from "../../context/BudgetContext";
import { useContext } from "react";

const BudgetListContainer = () => {
  const {budgetList} = useContext(BudgetContext);
  const items = budgetList
  return (
    <>
      <section className={styles.section}>
        <h4 className={styles.title}>Budget List</h4>
        {items?.map((item) => {
          return (
            <BudgetList
              key={item.productName}
              category={item.category}
              productName={item.productName}
              unitPrice={item.unitPrice}
              quantity={item.quantity}
            />
          );
        })}
        <div>
          <Link to="/budget">
            <button className={styles.button}>Return</button>
          </Link>
          <button className={styles.button}>Save List</button>
        </div>
      </section>
    </>
  );
};

export default BudgetListContainer;
