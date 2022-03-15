import React, {
  Component,
  useState,
  useRef,
  useEffect,
  useLayoutEffect,
} from "react";
import { Redirect } from "react-router-dom";
import SignUp from "./signUp";
import { auth, db } from "../config/fbinit";
import Calenadario from "./Reto30Dias";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "@firebase/auth";
import { collection, addDoc, getDocs, query, where } from "@firebase/firestore";
import Swal from "sweetalert2";
import PoliInmigrantes from "./policiaDeInmigrantes";

const Policia = ({ poli, setPoli }) => {
  const [user, setUser] = useState({});
  const [level, setLevel] = useState(0);
  const [amigo, setAmigito] = useState(0);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  useLayoutEffect(() => {
    const getLevel = async () => {
      try {
        const usersCollectionReference = collection(db, "usersRegistry");
        //   console.log("REFERENCIA", usersCollectionReference);
        const uid2 = user;
        if (uid2 != null) {
          if (uid2.uid) {
            const uid = uid2.uid;
            //   console.log("UID CLIENTE", uid);
            const q = query(usersCollectionReference, where("UID", "==", uid));
            const loggedUserData = await getDocs(q);
            // loggedUserData.forEach((doc) => { console.log(doc.data())});
            const trueLevel = loggedUserData.docs[0].data().nivelCuenta;
            //   console.log("trustLevel", trueLevel);
            setLevel(trueLevel);
            await setAmigo();
          }
        }
      } catch (e) {
        setAmigito(4);
      }
    };
    const setAmigo = async () => {
      if (user.uid) {
        setAmigito(3);
      } else {
        setAmigito(1);
      }
    };

    getLevel();
  }, [user, level]);

  switch (amigo) {
    case 1:
      return <Redirect to={"/signUp"} />;
      break;
    case 3:
      switch (level) {
        case 2:
          setPoli(true);
          return null;
          break;
        case 5:
          setPoli(true);
          return null;
          break;
        case 6:
          setPoli(true);
          return null;
          break;
        case 8:
          setPoli(true);
          return null;
          break;
        case 0:
          setPoli(true);
          return null;
          break;
        default:
          setPoli(false);
          Swal.fire({
            icon: "info",
            title: "oh no...",
            text: "Este es contenido premium... Si quieres acceder a el porfavor contacta a tabs a traves de instagram o whatsapp",
          });
          return <Redirect to={"/reto30Dias"} />;
          break;
      }
    case 4:
      Swal.fire({
        icon: "error",
        title: "oh no...",
        text: "Parece ser que tu cuenta tiene algun error.. No te preocupes!, notifica a Tabata y lo solucionaremos :)",
      });

      return <Redirect to={"/signUp"} />;
      break;
    default:
      return (
        <div>
          <PoliInmigrantes />
          Loading
        </div>
      );
      break;
  }

  // switch (amigo) {
  //   case 1:
  //     return <Redirect to={"/signUp"} />;
  //     break;
  //   case 3:
  //     switch (level) {
  //       case 2:
  //         return null;
  //         break;
  //       default:
  //         Swal.fire({
  //           icon: "info",
  //           title: "diantres",
  //           text: "Este es contenido premium... Si quieres acceder a el porfavor contacta a tabs a traves de instagram o whatsapp",
  //         }).then(() => {
  //           return <Redirect to={"/signUp"} />;
  //         });

  //         return <Redirect to={"/signUp"} />;

  //         break;
  //     }
  //     break;
  //   default:
  //     return (
  //       <div>
  //         <PoliInmigrantes />
  //         Loading
  //       </div>
  //     );
  //     break;
  // }
};

export default Policia;