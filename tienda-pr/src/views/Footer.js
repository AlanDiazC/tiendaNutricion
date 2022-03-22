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

import logo from "../multimedia/LogoHashtag.png";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div>
      <div className="footerCel footer">
        <div className="footerDatos">
          <div>
            <p className="footerContacto">
              <BsFacebook />
            </p>
          </div>

          <a href="/">
            <img className="footerLogo" src={logo} />
          </a>

          <div>
            <p className="footerContacto">
              <BsInstagram />
            </p>
          </div>
        </div>

        <div className="footerLogos">
          <a className="footerOpcionLogos" href="/Tienda">
            <FiShoppingBag />
          </a>

          <a className="footerOpcionLogos" href="/SobreNosotros">
            <FiInfo />
          </a>

          <a className="footerOpcionLogos" href="/Contacto">
            <FiMail />
          </a>

          {/* <Login /> */}
          <a className="footerOpcionLogos" href="/SignUp">
            <FiUser />
          </a>

          {/* 
            
            <a className="footerOpcionLogos" href="/MiCuenta">
              <FiUser />
            </a>
            */}

          <a className="footerOpcionLogos" href="/MiCarrito">
            <FiShoppingCart />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
