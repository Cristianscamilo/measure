import styles from "./Login.module.css";
import { BsFillEyeFill } from "react-icons/bs";
import { BsFillEyeSlashFill } from "react-icons/bs";

const Login = ({ status, showPassword }) => {
  return (
    <>
      <article className={styles.login}>
        <img
          src="https://res.cloudinary.com/dzivhovxf/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1706808980/webreact/zorroia.jpg"
          alt="logo Mea Sure"
          className={styles.img}
        />
        <h3 className={styles.title}>Mea Sure</h3>
        <form className={styles.form}>
          <input type="text" placeholder="User" autoComplete="current-user" />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            autoComplete="current-password"
          />
          <button className={styles.fotgotPassword}>Forgot Password?</button>
          <button className={styles.button}>Log in</button>
          {showPassword ? (
            <BsFillEyeSlashFill
              onClick={status}
              color="grey"
              className={styles.showHide}
            />
          ) : (
            <BsFillEyeFill
              onClick={status}
              color="grey"
              className={styles.showHide}
            />
          )}
        </form>
        <p className={styles.paragraph}>
          Don&apos;t have an account?<span> Sign up</span>
        </p>
      </article>
    </>
  );
};

export default Login;
