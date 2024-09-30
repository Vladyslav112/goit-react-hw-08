import { Field, Form, Formik, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import style from "./ContactForm.module.css";

const initialValues = { username: "", usernumber: "" };

export default function ContactForm() {
  const dispatch = useDispatch();

  const inputSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required"),
    usernumber: Yup.string()
      .matches(/^[\d-]+$/, "Must be a number")
      .min(9, "Too short")
      .max(12, "Too long!")
      .required("Required"),
  });

  const handleSubmit = (values, actions) => {
    const newContact = {
      name: values.username,
      number: values.usernumber,
    };
    dispatch(addContact(newContact));
    toast.success(`Contact ${values.username} successfully added!`);
    actions.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={inputSchema}
      >
        <Form className={style.form}>
          <label className={style.label} htmlFor="username">
            Name
          </label>
          <Field
            type="text"
            name="username"
            id="username"
            className={style.field}
          />
          <ErrorMessage
            name="username"
            component="span"
            className={style.errorMessage}
          />

          <label className={style.label} htmlFor="usernumber">
            Number
          </label>
          <Field
            type="text"
            name="usernumber"
            id="usernumber"
            className={style.field}
          />
          <ErrorMessage
            name="usernumber"
            component="span"
            className={style.errorMessage}
          />

          <button className={style.btn} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </>
  );
}
