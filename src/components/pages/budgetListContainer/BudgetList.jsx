import ItemCountContainer from "../../common/itemCount/ItemCountContainer";
import styles from "./BudgetList.module.css";

const BudgetList = ({
  category,
  productName,
  unitPrice,
  quantity,
  discountedPrice,
  selectOption,
  removeByName,
}) => {
  return (
    <>
      <article className={styles.card}>
        <button
          className={styles.close}
          onClick={() => {
            removeByName(productName);
          }}
        >
          X
        </button>
        <h4 className={styles.title}>PRODUCT DETAILS</h4>
        <div>
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
        </div>
        <p>
          <strong>Price by unit</strong> $ {unitPrice}
        </p>
        <p>
          <strong>Discounted Price</strong> $ {discountedPrice}
        </p>
      </article>
    </>
  );
};

export default BudgetList;
