import { NavLink } from "react-router-dom";
import style from "./AuthNav.module.css";

export default function AuthNav() {
  return (
    <div>
      <NavLink className={style.link} to="/register">
        Register
      </NavLink>
      <NavLink className={style.link} to="/login">
        Log In
      </NavLink>
    </div>
  );
}
