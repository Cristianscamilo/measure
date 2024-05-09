import { useState } from "react";

export const useCount = (initial = 0) => {
  const [count, setCounter] = useState(initial);

  const addOne = () => {
    if (count >= 0) {
      setCounter(count + 1);
    }
  };

  const subOne = () => {
    if (count >= 1) {
      setCounter(count - 1);
    }
  };
  return { addOne, subOne, count };
};
