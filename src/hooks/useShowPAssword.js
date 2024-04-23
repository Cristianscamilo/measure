import { useState } from "react"

const useShowPassword = (state = false) => {
    const [showPassword, setShowPassword] = useState(state);
const status = () => {
  setShowPassword(!showPassword);
};
  return [
    status,
    showPassword
  ]
}

export default useShowPassword