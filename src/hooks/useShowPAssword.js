import { useState } from "react"

const useShowPAssword = (state = false) => {
    const [showPassword, setShowPassword] = useState(state);
const status = () => {
  setShowPassword(!showPassword);
};
  return [
    status,
    showPassword
  ]
}

export default useShowPAssword