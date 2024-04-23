import useShowPassword from "../../../hooks/useShowPassword";
import Login from "./Login";

const LoginContainer = () => {
  const [status, showPassword] = useShowPassword(false);
  return <Login status={status} showPassword={showPassword} />;
};

export default LoginContainer;
