import React, { useState, useRef } from "react";
import "../css/miCuenta.css";
import { BiCurrentLocation } from "react-icons/bi";

const MiCuenta = () => {
  return (
    <div>
      <div className="Cuenta">
        <h1 className="cuentaTitulo">Mi Cuenta</h1>
        <h3 className="correoCuenta">Email: correo@ejemplo.com</h3>
        <div className="direcCuenta">
          <h2>Dirección de envio</h2>
          <button>
            <BiCurrentLocation />
          </button>
        </div>
        <div className="pedidos">
          <button>Mis pedidos</button>
        </div>
        <div className="error">
          <a href="/Contacto">
            <button>Algún error? Contáctanos</button>
          </a>
        </div>
        <div className="LogOut">
          <button>Cerrar sesión</button>
        </div>
      </div>
    </div>
  );
};

export default MiCuenta;
