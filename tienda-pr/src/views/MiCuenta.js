import React, { useState, useRef } from "react";
import "../cssVieja/miCuenta.css";
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
    <div>
      <div className="Cuenta">
        <div className="LogOut">
          <button onClick={logoutData}>Cerrar sesión</button>
        </div>
        <h1 className="cuentaTitulo">Mi Cuenta</h1>
        <h3 className="correoCuenta">Email: {user.email}</h3>
        <div className="direcCuenta">
          <h2>Dirección de envio</h2>
          <button>
            <BiCurrentLocation />
          </button>
        </div>
        {/* <div className="pedidos">
<button>Mis pedidos</button>
</div>
<div className="error">
<a href="/Contacto">
<button>Algún error? Contáctanos</button>
</a>
</div> */}
      </div>
    </div>
  );
};

export default MiCuenta;
