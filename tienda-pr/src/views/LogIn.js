import React, { Component, useState, useRef } from "react";
// import { useForm } from "react-hook-form";
// import useToken from "../useToken";
// import LogAd from "./LogUser";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
} from "@firebase/auth";
import { auth, db } from "../config/fbconfig";
import { collection, addDoc, query, getDocs, where } from "@firebase/firestore";
import Swal from "sweetalert2";
import "../css/logIn.css";
import useToken from "../useToken";
import { BsGoogle } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

// Funciones

// Componentes
const LogIn = () => {
  const [recuperar, setRecuperar] = useState(false);
  const falseRecuperar = () => setRecuperar(false);
  const trueRecuperar = () => setRecuperar(true);

  const dropdownRef = useRef(null);

  return (
    <div className="logIn">
      <div className="paddingLogIn">
        <div className="grid">
          <div className="gridItem">
            <div className="mensajeReset">
              Mandamos un correo para la recuperación de su contraseña.
            </div>
            <div className="logInBox">
              <h1 className="tituloLogIn">Log In</h1>
              <form>
                <label>Email</label>
                <input type="email" id="emailUsuario"></input>
                <label>Contraseña</label>
                <input type="password" id="contraUsuario"></input>
                <div>
                  <p>
                    <a ref={dropdownRef} onClick={() => trueRecuperar()}>
                      ¿Olvidaste tu contraseña?
                    </a>
                  </p>
                  <input type="submit" className="btnForm" value="Log In" />
                  <p>
                    <a>Crear cuenta</a>
                  </p>
                </div>
              </form>
            </div>
            <div className={`resetContra ${recuperar ? "true" : "false"}`}>
              <div className="tituloReset">
                <h2>Recuperar contraseña</h2>
                <p>Le mandaremos un correo para recuperar su contraseña.</p>
              </div>
              <form>
                <label>Email</label>
                <input type="email" id="resetUsuario"></input>
                <div>
                  <p>
                    <input type="submit" className="btnForm" value="Enviar" />
                  </p>
                  <a
                    id="Cancelar"
                    ref={dropdownRef}
                    onClick={() => falseRecuperar()}
                  >
                    Cancelar
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
