import React, { useState, useRef } from "react";
import "../css/navbar.css";

import { FiX } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";

import { FiUser } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";

import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "../config/fbconfig";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const subMenu = () => setIsActive(!isActive);
  const dropdownRef = useRef(null);

  const [user, setUser] = useState(false);

  const [cantCarrito, setCantCarrito] = useState(0);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const revisarCuentaPC = () => {
    if (user != null) {
      return (
        <li>
          <a href="/MiCuenta">Mi Cuenta</a>
        </li>
      );
    } else {
      return (
        <li>
          <a href="/Cuenta/LogIn">Log In</a>
        </li>
      );
    }
  };
  const revisarCuentaPC2 = () => {
    if (user != null) {
      return (
        <a href="/MiCuenta">
          <FiUser />
        </a>
      );
    } else {
      return (
        <a href="/Cuenta/LogIn">
          <FiUser />
        </a>
      );
    }
  };
  const revisarCuentaCel = () => {
    if (user != null) {
      return (
        <a href="/MiCuenta" className="navLinkCel2">
          Mi Cuenta
        </a>
      );
    } else {
      return (
        <a href="/Cuenta/LogIn" className="navLinkCel2">
          Log In
        </a>
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
      <header className="navHeader">
        <div className="headerWrapper">
          <div className="wrapperIzq celNavbar">
            <a
              ref={dropdownRef}
              onClick={() => subMenu()}
              className={`signo ${isActive ? "active" : "inactive"} `}
            >
              <FiMenu />
            </a>
            <a
              ref={dropdownRef}
              onClick={() => subMenu()}
              className={`signo ${isActive ? "inactive" : "active"} `}
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
                          Tienda en línea
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
                  Nosotros
                </a>
                {/* <a href="/QnA" className="navLinkCel2 espacioNav">
                  Preguntas Frecuentes
                </a> */}
                <a href="/DondeEstamos" className="navLinkCel2">
                  Donde encontrarnos
                </a>
                {revisarCuentaCel()}
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
            <div className="navLogo">
              <a href="/" className="navLogoLink">
                <img src="https://firebasestorage.googleapis.com/v0/b/pr-nutrition.appspot.com/o/Logo.png?alt=media&token=28787aa8-3cdb-4c68-b1bf-75bd9bbd8a64" />
              </a>
            </div>
          </div>
          <nav className="navPC PC">
            <div className="navLogo">
              <a href="/" className="navLogoLink">
                <img src="https://firebasestorage.googleapis.com/v0/b/pr-nutrition.appspot.com/o/Logo.png?alt=media&token=28787aa8-3cdb-4c68-b1bf-75bd9bbd8a64" />
              </a>
            </div>
          </nav>
          <div className="derPC PC">
            <nav className="navPC">
              <ul>
                <li>
                  <a href="/SobreNosotros">Nosotros</a>
                </li>
                <li>
                  <a href="/Tienda">Tienda en línea</a>
                </li>
                <li>
                  <a href="/DondeEstamos">Donde encontrarnos</a>
                </li>
                {revisarCuentaPC()}
                <li>
                  <a href="/Tienda">
                    Carrito
                    <span href="/MiCarrito" className="navCarrito">
                      {cantCarrito}
                    </span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>{" "}
        </div>
      </header>
    </div>
  );
};

export default Navbar;
