import React, { useState, useRef } from "react";
import "../css/navbar.css";

import { FiSearch } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";

import { FiHome } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";
import { FiInfo } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";

import logo from "../multimedia/Logo.png";

import { onAuthStateChanged, signOut } from "@firebase/auth";
import { auth } from "../config/fbconfig";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const subMenu = () => setIsActive(!isActive);
  const dropdownRef = useRef(null);

  const [user, setUser] = useState(false);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const revisarCuentaPC = () => {
    if (user != null) {
      return (
        <div className="op">
          <a className="opcion" href="/MiCuenta">
            Mi Cuenta
          </a>
          <a className="opcionLogos" href="/MiCuenta">
            <FiUser />
          </a>
        </div>
      );
    } else {
      return (
        <div className="op">
          <a className="opcion" href="/SignUp">
            Login
          </a>
          <a className="opcionLogos" href="/SignUp">
            <FiUser />
          </a>
        </div>
      );
    }
  };
  const revisarCuentaCel1 = () => {
    if (user != null) {
      return (
        <p>
          <a className="opcionLogos" href="/MiCuenta">
            <FiUser />
          </a>
        </p>
      );
    } else {
      return (
        <p>
          <a className="opcionLogos" href="/SignUp">
            <FiUser />
          </a>
        </p>
      );
    }
  };
  const revisarCuentaCel2 = () => {
    if (user != null) {
      return (
        <p>
          <a className="opcion" href="/MiCuenta">
            Mi Cuenta
          </a>
        </p>
      );
    } else {
      return (
        <p>
          <a className="opcion" href="/SignUp">
            Login
          </a>
        </p>
      );
    }
  };

  return (
    <div>
      <div className="navCel nav">
        <a href="/">
          <img className="navLogo" src={logo} />
        </a>
        {/* <input type="text" className="searchInput" placeholder="Buscar" />
        <a className="lupa">
          <FiSearch />
        </a> */}
        <div className="navSub">
          <a
            ref={dropdownRef}
            className={`navSubMenu ${isActive ? "inactive" : "active"}`}
            onClick={() => subMenu()}
          >
            <FiMenu />
          </a>
          <a
            ref={dropdownRef}
            className={`navSubMenu ${isActive ? "active" : "inactive"}`}
            onClick={subMenu}
          >
            <FiX />
          </a>
        </div>

        <div
          ref={dropdownRef}
          className={`subMenuLogos ${isActive ? "active" : "inactive"}`}
        >
          <p>
            <a className="opcionLogos" href="/">
              <FiHome />
            </a>
          </p>

          <p>
            <a className="opcionLogos" href="/Tienda">
              <FiShoppingBag />
            </a>
          </p>

          <p>
            <a className="opcionLogos" href="/SobreNosotros">
              <FiInfo />
            </a>
          </p>

          <p>
            <a className="opcionLogos" href="/Contacto">
              <FiMail />
            </a>
          </p>

          {revisarCuentaCel1()}

          <p>
            <a className="opcionLogos" href="/MiCarrito">
              <FiShoppingCart />
            </a>
          </p>
        </div>

        <div
          ref={dropdownRef}
          className={`subMenu ${isActive ? "active" : "inactive"}`}
        >
          <p>
            <a className="opcion" href="/">
              Inicio
            </a>
          </p>

          <p>
            <a className="opcion" href="/Tienda">
              Tienda
            </a>
          </p>

          <p>
            <a className="opcion" href="/SobreNosotros">
              Nosotros
            </a>
          </p>

          <p>
            <a className="opcion" href="/Contacto">
              Contacto
            </a>
          </p>

          {revisarCuentaCel2()}

          <p>
            <a className="opcion" href="/MiCarrito">
              Mi carrito
            </a>
          </p>
        </div>
      </div>
      <div className="navPC nav">
        <a href="/">
          <img className="navLogo" src={logo} />
        </a>
        {/* <input type="text" className="searchInput" placeholder="Buscar" />
        <a className="lupa">
          <FiSearch />
        </a> */}
        <div className="navSub">
          <a
            ref={dropdownRef}
            className={`navSubMenu ${isActive ? "inactive" : "active"}`}
            onClick={() => subMenu()}
          >
            <FiMenu />
          </a>
          <a
            ref={dropdownRef}
            className={`navSubMenu ${isActive ? "active" : "inactive"}`}
            onClick={subMenu}
          >
            <FiX />
          </a>
        </div>

        <div
          ref={dropdownRef}
          className={`subMenuLogos ${isActive ? "active" : "inactive"}`}
        ></div>

        <div
          ref={dropdownRef}
          className={`subMenu ${isActive ? "active" : "inactive"}`}
        >
          <div className="op">
            <a className="opcion" href="/">
              Inicio
            </a>
            <a className="opcionLogos" href="/">
              <FiHome />
            </a>
          </div>
          <div className="op">
            <a className="opcion" href="/Tienda">
              Tienda
            </a>
            <a className="opcionLogos" href="/Tienda">
              <FiShoppingBag />
            </a>
          </div>
          <div className="op">
            <a className="opcion" href="/SobreNosotros">
              Nosotros
            </a>
            <a className="opcionLogos" href="/SobreNosotros">
              <FiInfo />
            </a>
          </div>
          <div className="op">
            <a className="opcion" href="/Contacto">
              Contacto
            </a>
            <a className="opcionLogos" href="/Contacto">
              <FiMail />
            </a>
          </div>
          {revisarCuentaPC()}

          <div className="op">
            <a className="opcion" href="/MiCarrito">
              Mi carrito
            </a>
            <a className="opcionLogos" href="/MiCarrito">
              <FiShoppingCart />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
