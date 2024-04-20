import useShowPAssword from "../../../hooks/useShowPAssword";
import Login from "./Login";

const LoginContainer = () => {
  const [status, showPassword] = useShowPAssword(false);
  return <Login status={status} showPassword={showPassword} />;
};

export default LoginContainer;
