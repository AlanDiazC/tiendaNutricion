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

  const revisar = () => {
    if (user != null) {
      return <h3 className="correoCuenta">Email: {user.email}</h3>;
    } else {
      navigate("/signUp");
    }
  };

  return (
    <div>
      <div className="Cuenta">
        <h1 className="cuentaTitulo">Mi Cuenta</h1>
        {revisar()}
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
          <button onClick={logoutData}>Cerrar sesión</button>
        </div>
      </div>
    </div>
  );
};

export default MiCuenta;
