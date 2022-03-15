import React, { Component, useState, useRef } from "react";
// import { useForm } from "react-hook-form";
// import useToken from "../useToken";
// import LogAd from "./LogUser";
import { Redirect } from "react-router-dom";
import {
   createUserWithEmailAndPassword,
   onAuthStateChanged,
   signInWithEmailAndPassword,
   signOut,
   GoogleAuthProvider,
   signInWithPopup,
   FacebookAuthProvider,
 } from "@firebase/auth";
 import { auth, db } from "../config/fbinit";
 import { collection, addDoc, query, getDocs, where } from "@firebase/firestore";
import Swal from "sweetalert2";
import "../css/logIn.css";
import useToken from "../useToken";
import { BsGoogle } from "react-icons/bs";

// Funciones

// Componentes
const LogIn = () => {
  const signUpButtonRef = useRef();
  const signInButton = useRef();
  const container = useRef();
  React.useEffect(() => {
    signUpButtonRef.current.addEventListener("click", () => {
      container.current.classList.add("right-panel-active");
    });

    signInButton.current.addEventListener("click", () => {
      container.current.classList.remove("right-panel-active");
    });
  }, [signUpButtonRef, signInButton, container]);

     const { token, setToken } = useToken();

  //   const url = "/adminUsers";
     const [registerEmail, setRegisterEmail] = useState("");
     const [registerPassword, setregisterPassword] = useState("");
     const [loginEmail, setloginEmail] = useState("");
     const [loginPassword, setLoginPassword] = useState("");

     const [user, setUser] = useState({});

    const usersCollectionReference = collection(db, "usersRegistry");

     onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
     });
//Esta siguiente función crea una base de datos con info de la nueva cuenta para que no dependamos solo del normalito UID system.
     const creatingReferencetoUID = async (UID, email) => {
       const searchQuery = query(
         usersCollectionReference,
         where("UID", "==", UID)
       );
       const snapShot = await getDocs(searchQuery);
       if (snapShot.empty) {
         await addDoc(usersCollectionReference, {
           UID: UID,
  //         nivelCuenta: 1,
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
             title: "Contraseña invalida",
             text: "La contraseña debe tener mínimo 6 digitos",
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
         });
     };
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
         });
     };

   //const providerFacebook = new FacebookAuthProvider();

  // const registeringFacebook = () => {
  //   signInWithPopup(auth, providerFacebook)
  //     .then((e) => {
  //       const result = creatingReferencetoUID(
  //         auth.currentUser.uid,
  //         auth.currentUser.email
  //       );
  //     })
  //     .catch((error) => {
  //       Swal.fire({
  //         icon: "error",
  //         title: "Error al crear sesión",
  //         text: "Hubo un error al crear la sesión con Facebook",
  //       });
  //     });
  // };

  // const loginFacebook = () => {
  //   signInWithPopup(auth, providerFacebook).catch((error) => {
  //     Swal.fire({
  //       icon: "error",
  //       title: "Error al iniciar sesión",
  //       text: "Hubo un error en el inició de sesión con Facebook",
  //     });
  //   });
  // };

     const loginData = async (e) => {
       e.preventDefault();
       try {
         const user = await signInWithEmailAndPassword(
           auth,
           loginEmail,
           loginPassword
         );
         // console.log("user");
       } catch (erro) {
         switch (erro.code) {
           case "auth/user-not-found":
             Swal.fire({
               icon: "error",
               title: "Cuenta no encontrada",
               text: "Ese correo no esta registrado con ninguna cuenta",
             });
             break;
           case "auth/invalid-email":
             Swal.fire({
               icon: "error",
               title: "Correo invalido",
               text: "Por favor utilice un correo completo",
             });
             break;
           case "auth/wrong-password":
             Swal.fire({
               icon: "error",
               title: "Constraseña invalida",
               text: "Contraseña equivocada",
             });
             break;
           default:
             Swal.fire({
               icon: "error",
               title: "Error al iniciar sesión",
               text: "Favor de revisar que se introdujeron correctamente los datos",
             });
             break;
         }
       }
     };
    const logoutData = async (data) => {
       await signOut(auth);
     };
    const onChangeRegisterMail = (e) => {
       setRegisterEmail(e.target.value);
     };
    const onChangeRegisterPassword = (e) => {
       setregisterPassword(e.target.value);
     };
    const onChangeLoginMail = (e) => {
       setloginEmail(e.target.value);
     };
    const onChangeLoginPassword = (e) => {
       setLoginPassword(e.target.value);
     };

   //const onChangeLogout = (e) => {
    // setlogout(e.target.value);
   //}

  // if (!token) {
  //   return <LogAd setToken={setToken} />;
  // }
  return (
    <div className="supersingup">
      {/*Falta onChange*/}
      <div className="container" ref={container} id="container">
        <div className="form-container sign-up-container">
          <form>
            {" "}
            {/*Falta onSubmit*/}
            <div>
              <h1>Sign Up</h1>
              {/* <input placeholder="Nombre de Usuario" /> */}
            </div>
            <div className="social-container">
              <a href="#" className="social">
                {/*Falta onClick*/}
                <BsGoogle />
              </a>
              {/* <a href="#" className="social" onClick={registeringFacebook}>
                <i className="fab fa-facebook-f"></i>
              </a> */}
              {/* <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a> */}
            </div>
            <input placeholder="Correo asociado a la cuenta" />
            {/*Falta onChange*/}
            <input placeholder="Contraseña" type="password" />
            {/*Falta onChange*/}
            <button style={{ cursor: "pointer" }}>Sign me up !</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#">
            <h1>Log In</h1>
            <div className="social-container">
              <a href="#" className="social">
                {/*Falta onClick*/}

                <BsGoogle />
              </a>
              {/* <a href="#" className="social" onClick={loginFacebook}>
                <i className="fab fa-facebook-f"></i>
              </a> */}
              {/*<a href="#" className="social"><i className="fab fa-linkedin-in"></i></a> */}
            </div>
            <input type="email" placeholder="Email" />
            {/*Falta onChange*/}
            <input type="password" placeholder="Password" />
            {/*Falta onChange*/}
            <a href="/recuperarContraseña">Olvidaste tu Contraseña????</a>
            <button style={{ cursor: "pointer" }}>
              {/*Falta onClick*/}
              Log In
            </button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Bienvenido!</h1>
              <p>Si no cuentas con una cuenta, registra tus datos</p>
              <p>Si ya tienes una cuetan, por favor inicia sesión</p>
              <button
                style={{ cursor: "pointer" }}
                className="ghost"
                ref={signInButton}
                id="signIn"
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hola de nuevo!</h1>
              <p>Si ya tienes una cuenta, ingresa tus datos</p>
              <p>Si no tienes una cuenta, te invitamos a crear una</p>
              <button
                style={{ cursor: "pointer" }}
                className="ghost"
                ref={signUpButtonRef}
                id="signUp"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
