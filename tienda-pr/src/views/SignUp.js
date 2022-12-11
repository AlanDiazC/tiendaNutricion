import React, { Component, useState, useRef } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "@firebase/auth";
import { auth, db } from "../config/fbconfig";
import { collection, addDoc, query, getDocs, where } from "@firebase/firestore";
import Swal from "sweetalert2";
import "../css/logIn.css";
import useToken from "../useToken";
import { BsGoogle } from "react-icons/bs";

// Funciones

// Componentes
const SignUp = () => {
  const [recuperar, setRecuperar] = useState(false);
  const falseRecuperar = () => setRecuperar(false);
  const trueRecuperar = () => setRecuperar(true);
  const { token, setToken } = useToken();
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setregisterPassword] = useState("");
  const [user, setUser] = useState({});

  const usersCollectionReference = collection(db, "usersRegistry");

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

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

  const registeringData = async (e) => {
    e.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      const result = await creatingReferencetoUID(
        auth.currentUser.uid,
        auth.currentUser.email
      );
      const inicio = await signInWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      ).then(() => {
        Swal.fire({
          icon: "success",
          title: "Perfecto!",
          text: "Se ha creado la sesión",
          confirmButtonText: "Explorar página",
        }).then(() => {
          window.location.href = "/";
        });
      });
    } catch (erro) {
      switch (erro.code) {
        case "auth/email-already-in-use":
          Swal.fire({
            icon: "error",
            title: "Correo existente",
            text: "Esa cuenta ya existe, por favor utilice otro correo",
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
        case "auth/weak-password":
          Swal.fire({
            icon: "error",
            title: "Contraseña invalida",
            text: "La contraseña debe tener mínimo 6 digitos",
            confirmButtonText: "Entendido",
          });
          break;
        default:
          Swal.fire({
            icon: "error",
            title: "Error al crear la cuenta",
            text: "Favor de revisar que se introdujeron correctamente los datos",
            confirmButtonText: "Entendido",
          });
          break;
      }
    }
  };

  const providerGoogle = new GoogleAuthProvider();

  const registeringGoogle = () => {
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
            });
            break;
          default:
            Swal.fire({
              icon: "error",
              title: "Error al iniciar sesión",
              text: "Hubo un error en el inició de sesión con Google",
            });
            break;
        }
      })
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Perfecto!",
          text: "Se ha creado su cuenta correctamente",
        }).then(() => {
          window.location.href = "/";
        });
      });
  };

  const dropdownRef = useRef(null);

  const logoutData = async (data) => {
    await signOut(auth);
  };

  const onChangeRegisterMail = (e) => {
    setRegisterEmail(e.target.value);
  };

  const onChangeRegisterPassword = (e) => {
    setregisterPassword(e.target.value);
  };

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
              <a href="#" className="social" onClick={registeringGoogle}>
                <BsGoogle />
              </a>
              <form onSubmit={registeringData}>
                <label>Nombre</label>
                <input type="text" id="nombreUsuario"></input>
                <label>Email</label>
                <input
                  type="email"
                  id="emailUsuario"
                  onChange={onChangeRegisterMail}
                ></input>
                <label>Contraseña</label>
                <input
                  type="password"
                  id="contraUsuario"
                  onChange={onChangeRegisterPassword}
                ></input>
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
