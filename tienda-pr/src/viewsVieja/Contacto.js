import React, { useState, useRef } from "react";
import "../css/contacto.css";

import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const Contacto = () => {
  return (
    <div>
      <div className="Contacto">
        <h1 className="contactoTitulo">Contacto</h1>
        <div className="datosContacto">
          <div className="datosContact">
            <p className="contactoDatos">Correo: correo@ejemplo.com</p>
            <p className="contactoDatos">Telefono: 55 5555 5555</p>
          </div>
          <div className="datosRedes">
            <p className="contactoRedes">
              <BsFacebook />
            </p>
            <p className="contactoRedes">
              <BsInstagram />
            </p>
          </div>
        </div>
        <form className="formContacto">
          <label>Nombre *</label>
          <input type="text" required={true} name="corNombre" />
          <label>Correo *</label>
          <input type="text" required={true} name="corCorreo" />
          <label>Telefono</label>
          <input type="text" name="corCel" />
          <label>Mensaje *</label>
          <textarea type="text" required={true} name="corMensaje" />
          <div className="divBtnCon">
            <button type="submit">
              <span className="textoEnviarBtn">Enviar</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contacto;
