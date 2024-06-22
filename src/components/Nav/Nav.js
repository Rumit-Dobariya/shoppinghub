import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import styled from "styled-components";
import {FiShoppingCart} from "react-icons/fi";
import {CgMenu, CgClose} from "react-icons/cg";
import Styles from "./Nav.module.scss";

export default function Nav() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <div>
      <div className={`${menuIsOpen && "active"} ${Styles.navbar}`}>
        <ul className={`${menuIsOpen && "active"} ${Styles.navbarLists}`}>
          <li>
            <NavLink to="/" onClick={() => setMenuIsOpen(false)} className={Styles.navbarLink}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={() => setMenuIsOpen(false)} className={Styles.navbarLink}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" onClick={() => setMenuIsOpen(false)} className={Styles.navbarLink}>
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/contacts" onClick={() => setMenuIsOpen(false)} className={Styles.navbarLink}>
              Contacts
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" className={`${Styles.navbarLink} ${Styles.cartTrolleyLink}`}>
              <FiShoppingCart size={30} className={`${Styles.cartTrolley}`}/>
              <span className={`${Styles.cartTotalItem}`}>10</span>
            </NavLink>
          </li>
        </ul>

        <div className={`${Styles.mobileNavbarBtn} ${menuIsOpen && "active"}`}>
          <CgMenu onClick={() => setMenuIsOpen(true)} name="menu-outline" className={Styles.mobileNavIcon}/>
          <CgClose onClick={() => setMenuIsOpen(false)} name="close-outline" className={`${Styles.mobileNavIcon} closeOutline`}/>
        </div>
      </div>
    </div>
  );
}
