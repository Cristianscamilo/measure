import { Link } from "react-router-dom";
import styles from "./Budget.module.css";

const Budget = () => {

  return (
    <form className={styles.form}>
      <fieldset>
        <legend>Categoría</legend>
        <input
          type="text"
          className={styles.input}
          name="categoria"
          placeholder="Categoría"
        />
      </fieldset>
      <fieldset>
        <legend>Detalles del producto</legend>
        <input
          type="text"
          className={styles.input}
          name="nombre"
          placeholder="Nombre"
        />
        <input
          type="number"
          className={styles.input}
          name="precio_unitario"
          placeholder="Precio Unitario"
        />
        <input
          type="number"
          className={styles.input}
          name="cantidad"
          placeholder="Cantidad"
        />
        <span className={styles.total}>Precio Total: $45.000</span>
      </fieldset>
      <div className={styles.divButton}>
        <Link to="/budgetList">
        <button className={styles.button} type="button">Ver lista</button>
        </Link>
        <button className={styles.button} type="submit">Cargar</button>
      </div>
    </form>
  );
};

export default Budget;
