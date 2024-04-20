import { useState } from "react";
import Login from "./Login";

const LoginContainer = () => {
  const [showPassword, setShowPassword] = useState(false);
  const status = () => {
    setShowPassword(!showPassword);
  };
  return <Login status={status} showPassword={showPassword} />;
};

export default LoginContainer;
