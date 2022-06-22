import React, { useState, useRef } from "react";
import "../css/miCuenta.css";
import { BiCurrentLocation } from "react-icons/bi";
import { onAuthStateChanged, signOut } from "@firebase/auth";
import { auth } from "../config/fbconfig";
import { useNavigate } from "react-router-dom";

const MiCuenta = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const logoutData = async (data) => {
    await signOut(auth);
    navigate("/signUp");
  };

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  return (
    <div className="miCuenta">
      <div className="containerCuenta">
        <div className="tituloCuenta">
          <h1>Mi Cuenta</h1>
          <a>Cerrar Sesión</a>
        </div>
        <div className="detallesCuenta">
          <div>
            <h2>Detalles de la cuenta</h2>
            <p>Nombre Completo</p>
            <p>Correo</p>
            <p>Dirección: Ciudad, circuito, calle, numero, departamento</p>
            <a className="btnCuenta">Modificar dirección</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiCuenta;
