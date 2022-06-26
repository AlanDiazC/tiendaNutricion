import React, { useState, useRef } from "react";
import "../css/footer.css";

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
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="secFooter">
      <footer className="footer">
        <div className="containerFooter">
          <div className="footerRow">
            <div className="footerColLogo">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/pr-nutrition.appspot.com/o/Logo.png?alt=media&token=28787aa8-3cdb-4c68-b1bf-75bd9bbd8a64"
                className="footerLogo"
              />
            </div>
            <div className="footerCol">
              <div className="footerTitulo">
                <h4>Soporte</h4>
                <ul>
                  <li>
                    <a href="/Contacto">Concacto</a>
                  </li>
                  <li>
                    <a href="/QnA">FAQs</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footerCol">
              <div className="footerTitulo">
                <h4>Tienda</h4>
                <ul>
                  <li>
                    <a href="/Tienda">Productos</a>
                  </li>
                  <li>
                    <a href="/MiCarrito">Carrito</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footerCol">
              <div className="footerTitulo">
                <h4>Cuenta</h4>
                <ul>
                  <li>
                    <a href="/MiCuenta">Mi Cuenta</a>
                  </li>
                  <li>
                    <a href="/LogIn">Cerrar Sesión</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footerCol">
              <div className="footerTitulo">
                <h4>Contactanos</h4>
                <ul>
                  <li>
                    <a>pr.nutritionmx@gmail.com</a>
                  </li>
                  <li>
                    <a href="https://wa.me/525516820762">+52 55 1682 0762</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
