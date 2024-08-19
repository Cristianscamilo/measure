import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "./Login.module.css";
import { BsFillEyeFill } from "react-icons/bs";
import { BsFillEyeSlashFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Login = ({ status, showPassword }) => {
  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      user: "",
      password: "",
    },
    onSubmit: (data) => {
      console.log(data);
    },
    validationSchema: Yup.object({
      user: Yup.string()
        .required()
        .min(5, "user must be at least 5 characters"),
      password: Yup.string().required(),
    }),
    validateOnChange: false,
  });

  console.log(errors);

  return (
    <>
      <article className={styles.login}>
        <img
          src="https://res.cloudinary.com/dzivhovxf/image/upload/v1713806673/webreact/logo/zorroiaCircle_n7valc.jpg"
          alt="logo Mea Sure"
          className={styles.img}
        />
        <h3 className={styles.title}>Mea Sure</h3>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="User"
            autoComplete="current-user"
            name="user"
            onChange={handleChange}
          />
          <p className={styles.alertError1}>{errors.user}</p>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            autoComplete="current-password"
            name="password"
            onChange={handleChange}
          />
          <p className={styles.alertError2}>{errors.password}</p>
          <button type="button" className={styles.forgotPassword}>
            Forgot Password?
          </button>
          <Link to="/budget">
            <button type="submit" className={styles.button}>
              Log in
            </button>
          </Link>
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
          Don&apos;t have an account?
          <Link to="/signUp">
            <span className={styles.span}> Sign up</span>
          </Link>
        </p>
      </article>
    </>
  );
};

export default Login;
