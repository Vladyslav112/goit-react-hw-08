import { useSelector } from "react-redux";
import { selectVisibleContacts } from "../../redux/contacts/selectors.js";
import Contact from "../Contact/Contact";
import style from "./ContactList.module.css";

export default function ContactList() {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <>
      {visibleContacts.length > 0 ? (
        <ul className={style.container}>
          {visibleContacts.map((contact) => (
            <Contact key={contact.id} contact={contact} />
          ))}
        </ul>
      ) : (
        <p>No contacts available</p>
      )}
    </>
  );
}
