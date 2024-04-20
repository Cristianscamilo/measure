import styles from "./SignUp.module.css";
import { BsFillEyeFill } from "react-icons/bs";
import { BsFillEyeSlashFill } from "react-icons/bs";

const SignUp = ({ status, showPassword }) => {
  return (
    <>
      <article className={styles.signUp}>
        <img
          src="https://res.cloudinary.com/dzivhovxf/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1706808980/webreact/zorroia.jpg"
          alt="logo Mea Sure"
          className={styles.img}
        />
        <h3 className={styles.title}>Mea Sure</h3>
        <span className={styles.paragraph}>
          We invite you to register and keep your own record or measurement of
          your purchases.
        </span>
        <form className={styles.form}>
          <input
            type="email"
            placeholder="email"
            autoComplete="current-email"
          />
          <input
            type="text"
            placeholder="Username"
            autoComplete="current-username"
          />
          <input type="number" min="5" max="120" step="1" placeholder="Age" />
          <input
            type="text"
            placeholder="Gender"
            autoComplete="current-gender"
          />
          <input
            type="password"
            placeholder="Password"
            autoComplete="current-password"
          />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Confirm your password"
            autoComplete="current-confirm-password"
          />
          <p className={styles.paragraph}>
            By completing registration, you accept our <span>Legal Terms</span>,{" "}
            <span>Privacy Policy</span> and <span>Cookies Policy</span>.
          </p>
          <button className={styles.button}>Sign Up</button>
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
        <p className={styles.paragraphLogIn}>
          I already have an account! <span> Log in</span>
        </p>
      </article>
    </>
  );
};

export default SignUp;
