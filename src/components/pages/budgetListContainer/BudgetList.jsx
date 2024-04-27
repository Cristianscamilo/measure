const BudgetList = ({ addOne, SubOne, counter }) => {
  return (
    <>
      <button>return to budget</button>
      <article>
        <h4>Product</h4>
        <p>
          <strong>Category:</strong> Electrónica
        </p>
        <p>
          <strong>Product:</strong> Smartphone
        </p>
        <p>
          <strong>Quantity:</strong>
          <button onClick={SubOne} disabled={counter == 1 ? true : false}>
            -
          </button>
          <span>{counter}</span>
          <button onClick={addOne}>+</button>
        </p>
        <p>
          <strong>Price by unit :</strong> $500
        </p>
        {counter > 1 && (
          <p>
            <strong>Price x {counter}:</strong> $500
          </p>
        )}
      </article>
      <button>Guardar Cambios</button>
    </>
  );
};

export default BudgetList;
