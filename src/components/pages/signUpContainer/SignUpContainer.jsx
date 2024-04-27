import {useShowPassword} from "../../../hooks/useShowPassword";
import SignUp from "./SignUp";

const SignUpContainer = () => {
  const [status, showPassword] = useShowPassword(false);
  return <SignUp status={status} showPassword={showPassword} />;
};

export default SignUpContainer;
