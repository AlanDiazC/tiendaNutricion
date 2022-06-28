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
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp, BsPeople } from "react-icons/bs";

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
    <div className="navBar">
      <div className="textoArriba">
        <ul>
          <li>
            <a href="/Tienda">PR Nutrition</a>
          </li>
        </ul>
      </div>
      <header className="navHeader">
        <div className="headerWrapper">
          <div className="wrapperIzq cel">
            <a
              ref={dropdownRef}
              onClick={() => subMenu()}
              className={`${isActive ? "active" : "inactive"}`}
            >
              <FiMenu />
            </a>
            <a
              ref={dropdownRef}
              onClick={() => subMenu()}
              className={`${isActive ? "inactive" : "active"}`}
            >
              <FiX />
            </a>
            <div
              className={`filtroNav ${isActive ? "active" : "inactive"}`}
            ></div>
            <div className={`navbarCel ${isActive ? "active" : "inactive"}`}>
              <nav className="navCel">
                <ul className="navUlCel">
                  <li className="navIlCel">
                    <div className="navToggleCel">
                      <div className="navWrapperCel">
                        <a href="/Tienda" className="navLinkCel">
                          Productos
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="navIlCel">
                    <div className="navToggleCel">
                      <div className="navWrapperCel">
                        <a href="/MiCarrito" className="navLinkCel">
                          Mi Carrito
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </nav>
              <div className="navCel2">
                <a href="/SobreNosotros" className="navLinkCel2">
                  Sobre Nosotros
                </a>
                <a href="/QnA" className="navLinkCel2 espacioNav">
                  Preguntas Frecuentes
                </a>
                <a href="/Contacto" className="navLinkCel2">
                  Contacto
                </a>
                <a href="/Cuenta/LogIn" className="navLinkCel2">
                  Login / Cuenta
                </a>
              </div>
              <div className="navCelSocial">
                <a
                  className="navCelSocialLink"
                  href="https://wa.me/525516820762"
                >
                  <BsWhatsapp />
                </a>
                <a
                  className="navCelSocialLink"
                  href="https://www.instagram.com/pr.nutritionmx/?igshid=YmMyMTA2M2Y="
                >
                  <BsInstagram />
                </a>
              </div>
            </div>
          </div>
          <nav className="navPC PC">
            <ul>
              <li>
                <a href="/Tienda">Productos</a>
              </li>
            </ul>
          </nav>
          <div className="navLogo">
            <a href="/" className="navLogoLink">
              <img src="https://firebasestorage.googleapis.com/v0/b/pr-nutrition.appspot.com/o/Logo.png?alt=media&token=28787aa8-3cdb-4c68-b1bf-75bd9bbd8a64" />
            </a>
          </div>
          <div className="derPC PC">
            <nav className="navPC">
              <ul>
                <li>
                  <a href="/SobreNosotros">Sobre Nosotros</a>
                </li>
                <li>
                  <a href="/QnA">Preguntas Frecuentes</a>
                </li>
                <li>
                  <a href="MiCuenta">Mi Cuenta</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="navExtra">
            <div className="navWrapperPC PC">
              <div className="navExtraIcono">
                <a href="/Contacto">
                  <FiMail />
                </a>
                <a href="/Cuenta/LogIn">
                  <FiUser />
                </a>
              </div>
            </div>
            <div className="navCarro">
              <a href="/MiCarrito">1</a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
