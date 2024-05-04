import { Link } from "react-router-dom";
import styles from "./Budget.module.css";
import SelectUnit from "../../common/selectUnit/SelectUnit";

const Budget = ({ budgetList, handleSubmit, handleChange }) => {
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <fieldset>
        <legend>Category</legend>
        <input
          type="text"
          className={styles.input}
          name="category"
          placeholder="Category"
          onChange={handleChange}
        />
      </fieldset>
      <fieldset>
        <legend>Product Details</legend>
        <input
          type="text"
          className={styles.input}
          name="productName"
          placeholder="Product name"
          onChange={handleChange}
        />
        <SelectUnit />
        <p className={styles.paragraph}>
          <strong>Quantity:</strong>
          <input
            type="number"
            className={styles.quantity}
            name="quantity"
            onChange={handleChange}
            min={1}
            step={1}
          />
        </p>
        <input
          type="number"
          className={styles.input}
          name="unitPrice"
          placeholder="Unit price"
          onChange={handleChange}
        />
        <span className={styles.total}>Total: $45.000</span>
      </fieldset>
      <div className={styles.divButton}>
        <Link to={budgetList.length > 0 && "/budgetList"}>
          <button
            className={budgetList.length == 0 ? styles.block : styles.button}
            type="button"
          >
            List ({budgetList.length})
          </button>
        </Link>
        <button className={styles.button} type="submit">
          Upload to Budget
        </button>
      </div>
    </form>
  );
};

export default Budget;
