import BudgetList from "./BudgetList";
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
        {items?.map(({productName, category, unitPrice, quantity, discountedPrice, selectOption}, index) => {
          return (
            <BudgetList
              key={index}
              category={category}
              productName={productName}
              unitPrice={unitPrice}
              quantity={quantity}
              discountedPrice={discountedPrice}
              selectOption={selectOption}
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
