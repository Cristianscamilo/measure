import ItemCountContainer from "../../common/itemCount/ItemCountContainer";
import styles from "./BudgetList.module.css";

const BudgetList = ({
  category,
  productName,
  unitPrice,
  quantity,
  discountedPrice,
  selectOption,
}) => {
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
          <strong>Unit:</strong> {selectOption}
        </p>
        <p>
          <strong>Quantity: </strong>
          <ItemCountContainer quantity={quantity} />
        </p>
        <div className={styles.prices}>
          <p className={styles.prices}>
            <strong>Price by unit</strong> $ {unitPrice}
          </p>
          <p className={styles.prices}>
            <strong>Discounted Price</strong> $ {discountedPrice}
          </p>
        </div>
      </article>
    </>
  );
};

export default BudgetList;
