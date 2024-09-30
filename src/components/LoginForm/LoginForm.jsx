import { Formik, Form, Field } from "formik";
import style from "./LoginForm.module.css";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";

export default function LoginForm() {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
    dispatch(logIn(values));
  };

  return (
    <div className={style.container}>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form className={style.form} autoComplete="off">
          <label className={style.label}>
            Email
            <Field type="email" name="email" />
          </label>
          <label className={style.label}>
            Password
            <Field type="password" name="password" />
          </label>
          <button className={style.btn} type="submit">
            Log In
          </button>
        </Form>
      </Formik>
    </div>
  );
}
