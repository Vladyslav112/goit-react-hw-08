import { useDispatch, useSelector } from "react-redux";
import style from "./UserMenu.module.css";
import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";
import { RiLogoutBoxLine } from "react-icons/ri";

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <div className={style.wrapper}>
      <p className={style.username}>Welcome, {user.name}</p>
      <button onClick={() => dispatch(logOut())} type="button">
        <RiLogoutBoxLine />
      </button>
    </div>
  );
}
