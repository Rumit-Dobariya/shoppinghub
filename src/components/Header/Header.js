import React from "react";
import { NavLink } from "react-router-dom";
import Styles from "./Header.module.scss";
import Nav from "../Nav/Nav";

export default function Header() {
  return (
    <div className={Styles.pageMain}>
      <NavLink to="/">
        <img src="/images/355.png" alt="logo" className={Styles.logo} />
      </NavLink>
      <Nav></Nav>
    </div>
  );
}
