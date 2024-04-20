import useShowPAssword from "../../../hooks/useShowPAssword"
import SignUp from "./SignUp"

const SignUpContainer = () => {
  const [status, showPassword] = useShowPAssword(false);
  return (
    <SignUp  status={status} showPassword={showPassword}/>
  )
}

export default SignUpContainer