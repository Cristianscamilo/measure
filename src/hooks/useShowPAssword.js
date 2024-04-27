import { useState } from "react";

export const useShowPassword = (state = false) => {
  const [showPassword, setShowPassword] = useState(state);
  const status = () => {
    setShowPassword(!showPassword);
  };
  return [status, showPassword];
};

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
