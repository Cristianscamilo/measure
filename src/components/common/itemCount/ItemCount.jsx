import styles from "./ItemCount.module.css";

const ItemCount = ({ addOne, subOne, count }) => {
  return (
    <>
      <button
        className={styles.button}
        onClick={subOne}
        disabled={count == 1 ? true : false}
      >
        -
      </button>
      <span>{count}</span>
      <button className={styles.button} onClick={addOne}>
        +
      </button>
    </>
  );
};

export default ItemCount;
