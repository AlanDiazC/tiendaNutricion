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
import { Navigate } from "react-router-dom";

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
    } catch (erro) {
      switch (erro.code) {
        case "auth/email-already-in-use":
          Swal.fire({
            icon: "error",
            title: "Correo existente",
            text: "Esa cuenta ya existe, por favor utilice otro correo",
          });
          break;
        case "auth/invalid-email":
          Swal.fire({
            icon: "error",
            title: "Correo invalido",
            text: "Por favor utilice un correo completo",
          });
          break;
        case "auth/weak-password":
          Swal.fire({
            icon: "error",
            title: "Contrase??a invalida",
            text: "La contrase??a debe tener m??nimo 6 digitos",
          });
          break;
        default:
          Swal.fire({
            icon: "error",
            title: "Error al crear la cuenta",
            text: "Favor de revisar que se introdujeron correctamente los datos",
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
              title: "Seleccione una opci??n",
              text: "Por favor elija una opci??n para iniciar sesi??n",
            });
            break;
          default:
            Swal.fire({
              icon: "error",
              title: "Error al iniciar sesi??n",
              text: "Hubo un error en el inici?? de sesi??n con Google",
            });
            break;
        }
      }).then(() =>{
        Swal.fire({
              icon: "success",
              title: "Perfecto!",
              text: "Se ha creado su cuenta correctamente :)",
            }).then(()=>{
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
              Mandamos un correo para la recuperaci??n de su contrase??a.
            </div> */}
            <div className="logInBox">
              <h1 className="tituloLogIn">Crear cuenta</h1>
              <a href="#" className="social" onClick={registeringGoogle}>
                <BsGoogle/>
              </a>
              <form onSubmit={registeringData}>
                <label>Nombre</label>
                <input type="text" id="nombreUsuario"></input>
                <label>Email</label>
                <input type="email" id="emailUsuario" onChange={onChangeRegisterMail}></input>
                <label>Contrase??a</label>
                <input type="password" id="contraUsuario" onChange={onChangeRegisterPassword}></input>
                <label>Confirmar contrase??a</label>
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
