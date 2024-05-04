import { useState } from "react";

export const useCounter = (initial = 1) => {
  const [counter, setCounter] = useState(initial);

  const addOne = () => {
    if (counter >= 0) {
      setCounter(counter + 1);
    }
  };

  const subOne = () => {
    if (counter >= 1) {
      setCounter(counter - 1);
    }
  };
  return [addOne, subOne, counter];
};
