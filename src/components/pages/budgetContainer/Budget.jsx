import { Link } from "react-router-dom";
import styles from "./Budget.module.css";

const Budget = () => {
  return (
    <form className={styles.form}>
      <fieldset>
        <legend>Category</legend>
        <input
          type="text"
          className={styles.input}
          name="Category"
          placeholder="Category"
        />
      </fieldset>
      <fieldset>
        <legend>Product Details</legend>
        <input
          type="text"
          className={styles.input}
          name="productName"
          placeholder="Product name"
        />
        <input
          type="text"
          className={styles.input}
          name="-------"
          placeholder="Selecciona una unidad (pendiente)"
        />
        <input
          type="number"
          className={styles.input}
          name="unitPrice"
          placeholder="Unit price"
        />
        <input
          type="number"
          className={styles.input}
          name="quantity"
          placeholder="Quantity"
        />
        <span className={styles.total}>Total: $45.000</span>
      </fieldset>
      <div className={styles.divButton}>
        <Link to="/budgetList">
          <button className={styles.button} type="button">
            List
          </button>
        </Link>
        <button className={styles.button} type="submit">
          Upload
        </button>
      </div>
    </form>
  );
};

export default Budget;

/*

debo validar si esto vienen con las validaciones de formik y yup

function YourComponent() {
  // 1. Define un estado para almacenar el valor seleccionado
  const [selectedValue, setSelectedValue] = useState('');

  // 3. Define la función de manejo de cambios
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

<select className={styles.select} value={selectedValue} onChange={handleChange}>
          <option value="" disabled selected hidden>
            Selecciona una unidad
          </option>
          <option value="kg">Kilogram (kg)</option>
          <option value="g">Gram (g)</option>
          <option value="L">Liter (L)</option>
          <option value="ml">Milliliter (ml)</option>
          <option value="unit">Unit (unit)</option>
          <option value="lbs">Pound (lbs)</option>
          <option value="oz">Ounce (oz)</option>
          <option value="gal">Gallon (gal)</option>
          <option value="dozen">Dozen</option>
        </select>
*/
