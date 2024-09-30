import { NavLink } from "react-router-dom";
import style from "./Navigation.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav>
      <NavLink className={style.link} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={style.link} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
}
