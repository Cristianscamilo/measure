import SelectOption from "../../common/selectOption/SelectOption";
import styles from "./PopUp.module.css";
const PopUp = ({ options }) => {
  return (
    <>
      <form className={styles.form}>
        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>COMMERCIAL DATA</legend>
          <h4>Business Name:</h4>
          <SelectOption options={options} />
          <h4>Alphanumeric budget id:</h4>
          <input
            type="text"
            className={styles.input}
            name="budgetName"
            required
            placeholder="Budget name"
          />
        </fieldset>
        <div className={styles.buttonDispotition}>
          <button className={styles.button}>Return</button>
          <button className={styles.button}>Save</button>
        </div>
      </form>
    </>
  );
};

export default PopUp;
