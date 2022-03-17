import React, { useState, useRef } from "react";
import "../css/navbar.css";

import { FiSearch } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";
import logo from "../multimedia/Logo.png";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const subMenu = () => setIsActive(!isActive);
  const dropdownRef = useRef(null);

  const [user, setUser] = useState(false);

  // const Login = () => {
  //   if (user) {
  //     return (
  //       <a className="opcion" href="/MiCuenta">
  //         Mi Cuenta
  //       </a>
  //     );
  //   } else {
  //     return (
  //       <a className="opcion" href="/SignUp">
  //         Login
  //       </a>
  //     );
  //   }
  // };

  return (
    <div>
      <div className="navCel nav">
        <a href="/">
          <img className="navLogo" src={logo} />
        </a>
        <input type="text" className="searchInput" placeholder="Buscar" />
        <a className="lupa">
          <FiSearch />
        </a>
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

          <p>
            {/* <Login /> */}
            <a className="opcion" href="/SignUp">
              Login
            </a>
          </p>
          <p>
            {/*Borrar tras la revisión al publico*/}
            <a className="opcion" href="/MiCuenta">
              Mi Cuenta
            </a>
          </p>

          <p>
            <a className="opcion" href="/MiCarrito">
              Mi carrito
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
