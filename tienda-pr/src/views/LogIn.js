import React, { Component, useState, useRef } from "react";
import { Navigate } from "react-router-dom";
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
  sendPasswordResetEmail,
} from "@firebase/auth";
import { auth, db } from "../config/fbconfig";
import { collection, addDoc, query, getDocs, where } from "@firebase/firestore";
import Swal from "sweetalert2";
import "../css/logIn.css";
import useToken from "../useToken";
import { BsFillPersonFill, BsGoogle } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

import { getAuth, signInAnonymously } from "firebase/auth";




// Funciones

// Componentes
const LogIn = () => {
  const { token, setToken } = useToken();
  const [recuperar, setRecuperar] = useState(false);
  const falseRecuperar = () => setRecuperar(false);
  const trueRecuperar = () => setRecuperar(true);
  const [mensajeContra, setMensaje] = useState(false);
  const [loginEmail, setloginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const usersCollectionReference = collection(db, "usersRegistry");
  const [user, setUser] = useState({});
  const providerGoogle = new GoogleAuthProvider();

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  const onChangeLoginMail = (e) => {
    setloginEmail(e.target.value);
  };

  const mensajearContrasena = (e) => {
    e.preventDefault();
    sendPasswordResetEmail(auth, e.target[0].value);
    setMensaje(true);
  };

  const creatingReferencetoUID = async (UID, email) => {
    const searchQuery = query(
      usersCollectionReference,
      where("UID", "==", UID)
    );
    const snapShot = await getDocs(searchQuery);
    if (snapShot.empty) {
      await addDoc(usersCollectionReference, {
        UID: UID,
        nivelCuenta: 1,
        email: email,
      });
    } else {
      console.log("Exito");
    }
  };

  const onChangeLoginPassword = (e) => {
    setLoginPassword(e.target.value);
  };
  const dropdownRef = useRef(null);


  const logInAnonymous = () => {
    const auth = getAuth();
    signInAnonymously(auth)
      .then((e) => {
        // Signed in..
        const result = creatingReferencetoUID(
          auth.currentUser.uid,
          auth.currentUser.email
        );
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ...
      })
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Perfecto!",
          text: "Haz entrado como invitado",
          confirmButtonText: "Explorar página",
        }).then(() => {
          window.location.href = "/";
        });
      });
    }


  const loginGoogle = () => {
    signInWithPopup(auth, providerGoogle)
      .then((e) => {
        const result = creatingReferencetoUID(
          auth.currentUser.uid,
          auth.currentUser.email
        );
      })
      .catch((error) => {
        switch (error.code) {
          case "auth/popup-closed-by-user":
            Swal.fire({
              icon: "info",
              title: "Seleccione una opción",
              text: "Por favor elija una opción para iniciar sesión",
              confirmButtonText: "Entendido",
            });
            break;
          default:
            Swal.fire({
              icon: "error",
              title: "Error al iniciar sesión",
              text: "Hubo un error en el inició de sesión con Google",
              confirmButtonText: "Entendido",
            });
            break;
        }
      })
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Perfecto!",
          text: "Te has logueado con tu cuenta correctamente",
          confirmButtonText: "Explorar página",
        }).then(() => {
          window.location.href = "/";
        });
      });
  };

  const loginData = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      ).then(() => {
        Swal.fire({
          icon: "success",
          title: "Perfecto!",
          text: "Se ha iniciado sesión",
          confirmButtonText: "Explorar página",
        }).then(() => {
          window.location.href = "/";
        });
      });
      // console.log("user");
    } catch (erro) {
      switch (erro.code) {
        case "auth/user-not-found":
          Swal.fire({
            icon: "error",
            title: "Cuenta no encontrada",
            text: "Ese correo no esta registrado con ninguna cuenta",
            confirmButtonText: "Entendido",
          });
          break;
        case "auth/invalid-email":
          Swal.fire({
            icon: "error",
            title: "Correo invalido",
            text: "Por favor utilice un correo completo",
            confirmButtonText: "Entendido",
          });
          break;
        case "auth/wrong-password":
          Swal.fire({
            icon: "error",
            title: "Constraseña invalida",
            text: "Contraseña equivocada",
            confirmButtonText: "Entendido",
          });
          break;
        default:
          Swal.fire({
            icon: "error",
            title: "Error al iniciar sesión",
            text: "Favor de revisar que se introdujeron correctamente los datos",
            confirmButtonText: "Entendido",
          });
          break;
      }
    }
  };
  return (
    <div className="logIn">
      <div className="paddingLogIn">
        <div className="grid">
          <div className="gridItem">
            <div className={`mensajeReset ${mensajeContra ? "true" : "false"}`}>
              Mandamos un correo para la recuperación de su contraseña.
            </div>
            <div className="logInBox">
              <h1 className="tituloLogIn">Log In</h1>
              <a href="#" className="social" onClick={loginGoogle}>
                <BsGoogle />
              </a>
              <a href="#" className="social" onClick={logInAnonymous}>
                <BsFillPersonFill /> Invitado
              </a>
              
              <form>
                <label>Email</label>
                <input
                  type="email"
                  id="emailUsuario"
                  onChange={onChangeLoginMail}
                ></input>
                <label>Contraseña</label>
                <input
                  type="password"
                  id="contraUsuario"
                  onChange={onChangeLoginPassword}
                ></input>
                <div>
                  <p>
                    <a ref={dropdownRef} onClick={() => trueRecuperar()}>
                      ¿Olvidaste tu contraseña?
                    </a>
                  </p>

                  <p>
                    <button
                      style={{ cursor: "pointer" }}
                      onClick={loginData}
                      className="btnForm"
                    >
                      Log In
                    </button>
                    <a href="/Cuenta/SignUp" className="crearCuenta">
                      Crear cuenta
                    </a>
                  </p>
                </div>
              </form>
            </div>
            <div className={`resetContra ${recuperar ? "true" : "false"}`}>
              <div className="tituloReset">
                <h2>Recuperar contraseña</h2>
                <p>Le mandaremos un correo para recuperar su contraseña.</p>
              </div>
              <form onSubmit={mensajearContrasena}>
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
