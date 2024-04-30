import BudgetList from "./BudgetList";
import { useCounter } from "../../../hooks/useShowPassword";
import { useState } from "react";
const productos = [
  {
    categoria: "Cereales",
    nombre: "Arrozx10kg",
    precioU: 40890,
    cantidad: 1,
  },
  {
    categoria: "Harinas",
    nombre: "Pasta Clásica Spaghetti Doria x 1000 g",
    precioU: 4780,
    cantidad: 1,
  },
  {
    categoria: "Cereales",
    nombre: "Cereal Choco Krispis bolsa resellable x410g",
    precioU: 21550,
    cantidad: 1,
  },
  {
    categoria: "Granos",
    nombre: "Frijoles San Jorge antioqueños con tocino lata x580g",
    precioU: 12490,
    cantidad: 1,
  },
];

const BudgetListContainer = () => {
  const [addOne, SubOne, counter] = useCounter(1);
  const [items, setItems] = useState([productos]);

  return (
    <>
      <h4
        style={{
          width: "340px",
          margin: "10px",
          fontSize: "50px",
          fontFamily: "var(--font-settings)",
        }}
      >
        Budget List
      </h4>
      <BudgetList
        products={items}
        setItems={setItems}
        addOne={addOne}
        SubOne={SubOne}
        counter={counter}
      />
    </>
  );
};

export default BudgetListContainer;
