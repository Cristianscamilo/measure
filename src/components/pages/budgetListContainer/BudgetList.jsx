import styles from "./BudgetList.module.css";

const BudgetList = ({ addOne, SubOne, counter, category, productName, unitPrice, quantity }) => {
  return (
    <>
      <article className={styles.card}>
        <h4 className={styles.title}>PRODUCT DETAILS</h4>
        <p>
          <strong>Category:</strong> {category}
        </p>
        <p className={styles.nameProduct}>
          <strong>Product:</strong> {productName}
        </p>
        <p>
          <strong>unit:</strong> kg, lt
        </p>
         <p>
          <strong>Quantity:</strong>
          <button className={styles.button} onClick={SubOne} disabled={counter == 1 ? true : false}>
            -
          </button>
          <span>{counter}</span>
          <button className={styles.button} onClick={addOne}>+</button>
        </p>
        <p>
          <strong>Price by unit :</strong> $ {unitPrice}
        </p>
        {counter > 1 && (
          <p>
            <strong>Price x {quantity}:</strong> $500
          </p>
        )}
      </article>
    </>
  );
};

export default BudgetList;
