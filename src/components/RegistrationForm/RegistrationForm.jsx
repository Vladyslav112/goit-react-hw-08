import { Formik, Form, Field } from "formik";
import style from "./RegistrationForm.module.css";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
    dispatch(register(values));
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={style.form} autoComplete="off">
        <label className={style.label}>
          Username
          <Field type="text" name="name" />
        </label>
        <label className={style.label}>
          Email
          <Field type="email" name="email" />
        </label>
        <label className={style.label}>
          Password
          <Field type="password" name="password" />
        </label>
        <button className={style.btn} type="submit">
          Register
        </button>
      </Form>
    </Formik>
  );
}
