import { useState } from "react";

const useTotalizing = (initial ='0.00') => {
  const [valor, setValor] = useState(initial);

  const finalPrice = (price, quantity) => {
    if (quantity >= 1 && price > 0) {
      let total = quantity * price;
      setValor(total);
    }
  };

  return [finalPrice, valor];
};

export default useTotalizing;
