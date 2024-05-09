import { Link } from "react-router-dom";
import styles from "./Budget.module.css";
import SelectUnit from "../../common/selectUnit/SelectUnit";

const Budget = ({ budgetList, handleSubmit, handleChange, handleSelectChange }) => {
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <fieldset>
        <legend>Category</legend>
        <input
          type="text"
          className={styles.input}
          name="category"
          placeholder="Category"
          pattern="[a-zA-Z]+"
          title="Only letters allowed"
          onChange={handleChange}
        />
      </fieldset>
      <fieldset>
        <legend>Product Details</legend>
        <input
          type="text"
          className={styles.input}
          name="productName"
          required
          placeholder="Product name"
          onChange={handleChange}
        />
        <SelectUnit handleSelectChange={handleSelectChange} />
        <p className={styles.paragraph}>
          <strong>Quantity:</strong>
          <input
            type="number"
            className={styles.quantity}
            name="quantity"
            pattern="[0-9]+.*"
            required
            title="Please enter at least one number"
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
          pattern="[0-9]+.*"
          title="Please enter the price"
          onChange={handleChange}
        />
        <input
          type="number"
          className={styles.input}
          name="discountedPrice"
          required
          pattern="[0-9]+.*"
          title="Please enter the discounted price"
          placeholder="Discounted price"
          onChange={handleChange}
        />
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
