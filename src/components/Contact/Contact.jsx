import style from "./Contact.module.css";
import { AiOutlineUser } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { BsPencilSquare } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteContact, changeContact } from "../../redux/contacts/operations";
import { setCurrentContact } from "../../redux/contacts/slice";

export default function Contact({ contact }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  const handleChange = () => {
    dispatch(setCurrentContact(contact));
  };

  return (
    <li className={style.container}>
      <div className={style.containerData}>
        <div>
          <AiOutlineUser className={style.icon} />
          <span className={style.itemEl}>{contact.name}</span>
        </div>
        <div>
          <FiPhone />
          <span className={style.itemEl}>{contact.number}</span>
        </div>
      </div>
      <div className={style.containerButton}>
        <button className={style.button} onClick={handleChange}>
          <BsPencilSquare />
        </button>
        <button className={style.button} onClick={handleDelete}>
          <MdDelete />
        </button>
      </div>
    </li>
  );
}
