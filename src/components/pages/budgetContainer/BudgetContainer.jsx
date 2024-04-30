import Budget from "./Budget";


const BudgetContainer = () => {
  return (
    <>
      <h3
        style={{
          width: "350px",
          margin: "20px 10px 20px 30px",
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
