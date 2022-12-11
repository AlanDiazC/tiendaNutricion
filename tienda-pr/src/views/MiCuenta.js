import React, { useState, useRef } from "react";
import { Navigate } from "react-router-dom";
import "../css/miCuenta.css";
import { onAuthStateChanged, signOut } from "@firebase/auth";
import { auth } from "../config/fbconfig";
import { useNavigate } from "react-router-dom";
import Policia from "./policia";

const MiCuenta = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const logoutData = (data) => {
    signOut(auth);
    navigate("/signUp");
  };
  const [poli, setPoli] = useState(false);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const obtenerDatos = () => {
    revisar();

    const nombre = user.displayName || "Invitado";
    const mail = user.email;
    const cel = user.phoneNumber;
    return (
      <div style={{ padding: 0 }}>
        <p>{nombre}</p>
        <p>{mail}</p>
        <p>{cel}</p>
      </div>
    );
  };

  const revisar = () => {
    if (poli == true) {
      return null;
    } else {
      return <Navigate to={"/Cuenta/LogIn"} />;
    }
  };

  return (
    <div className="miCuenta">
      <Policia poli={poli} setPoli={setPoli} />
      <div className="containerCuenta">
        <div className="tituloCuenta">
          <h1>Mi Cuenta</h1>
          <a style={{ cursor: "pointer" }} onClick={logoutData}>
            Cerrar Sesión
          </a>
        </div>
        <div className="detallesCuenta">
          <div>
            <h2>Detalles de la cuenta</h2>
            {obtenerDatos()}
            {/* <a className="btnCuenta">Modificar dirección</a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiCuenta;
