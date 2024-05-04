import { useState } from "react";

export const useShowPassword = (state = false) => {
  const [showPassword, setShowPassword] = useState(state);
  const status = () => {
    setShowPassword(!showPassword);
  };
  return [status, showPassword];
};
