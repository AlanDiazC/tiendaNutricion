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
const SignUp = () => {
  const [recuperar, setRecuperar] = useState(false);
  const falseRecuperar = () => setRecuperar(false);
  const trueRecuperar = () => setRecuperar(true);

  const dropdownRef = useRef(null);

  return (
    <div className="logIn">
      <div className="paddingLogIn">
        <div className="grid">
          <div className="gridItem">
            {/* <div className="mensajeReset">
              Mandamos un correo para la recuperación de su contraseña.
            </div> */}
            <div className="logInBox">
              <h1 className="tituloLogIn">Crear cuenta</h1>
              <form>
                <label>Nombre</label>
                <input type="text" id="nombreUsuario"></input>
                <label>Email</label>
                <input type="email" id="emailUsuario"></input>
                <label>Contraseña</label>
                <input type="password" id="contraUsuario"></input>
                <label>Confirmar contraseña</label>
                <input type="password" id="contraConfirmUsuario"></input>
                <div>
                  <input type="submit" className="btnForm" value="Crear" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
