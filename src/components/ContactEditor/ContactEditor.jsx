import { useSelector, useDispatch } from "react-redux";
import { selectCurrentContact } from "../../redux/contacts/selectors";
import { changeContact } from "../../redux/contacts/operations";
import { resetCurrentContact } from "../../redux/contacts/slice";
import { FaBackspace } from "react-icons/fa";
import { RxUpdate } from "react-icons/rx";
import { toast } from "react-toastify";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import style from "./ContactEditor.module.css";

export default function ContactEditor({ contact }) {
  const dispatch = useDispatch();
  const currentContact = useSelector(selectCurrentContact);

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

  const initialValues = {
    username: currentContact.name,
    usernumber: currentContact.number,
  };

  const handleSubmit = (values, actions) => {
    const updatedContact = {
      name: values.username,
      number: values.usernumber,
    };

    dispatch(changeContact({ contactId: contact.id, updatedContact }));
    toast.success("Contact updated successfully!");
    actions.resetForm();
  };

  const handleCancel = () => {
    dispatch(resetCurrentContact());
  };

  return (
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
        <div className={style.btnContainer}>
          <button className={style.btn} type="submit">
            <RxUpdate />
          </button>

          <button className={style.btn} type="button" onClick={handleCancel}>
            <FaBackspace />
          </button>
        </div>
      </Form>
    </Formik>
  );
}
