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
      <div className="divProb">
        <a className="navProb" href="/">
          <FiHome /> Homepage
        </a>
        <a className="navProb" href="/SobreNosotros">
          <FiInfo /> Nosotros
        </a>
        <a className="navProb" href="/QnA">
          <FiMail /> FaQs
        </a>
        <a className="navProb" href="/Cuenta/LogIn">
          <FiUser /> Log In
        </a>
        <a className="navProb" href="/Cuenta/SignUp">
          <FiUser /> Sign up
        </a>
        <a className="navProb" href="/Contacto">
          <FiMail /> Contacto
        </a>
        <a className="navProb" href="/Tienda">
          <FiShoppingBag /> Tienda
        </a>
        <a className="navProb" href="/MiCarrito">
          <FiShoppingCart /> Mi Carrito
        </a>
      </div>
    </div>
  );
};

export default Navbar;
