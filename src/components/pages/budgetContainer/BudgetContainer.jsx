import Budget from "./Budget";


const BudgetContainer = () => {
  return (
    <>
      <h3
        style={{
          margin: "10px",
          fontSize: "60px",
          fontFamily: "var(--font-settings)",
        }}
      >
        Budget
      </h3>
      <Budget />
    </>
  );
};

export default BudgetContainer;
