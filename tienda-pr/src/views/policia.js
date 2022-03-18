import React, {
  Component,
  useState,
  useRef,
  useEffect,
  useLayoutEffect,
} from "react";
import { useNavigate } from "react-router-dom";
import SignUp from "./LogIn";
import { auth, db } from "../config/fbconfig";
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
  const navigate = useNavigate();
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
      
      return <div>{navigate("/signUp")}</div>
      break;
    case 3:
      setPoli(true);
      return null;
      break;
    case 4:  //Esto es si hay un Error
      Swal.fire({
        icon: "error",
        title: "oh no...",
        text: "Parece ser que tu cuenta tiene algun error.. No te preocupes!, notifica a PR Nutrition y lo solucionaremos :)",
      });

      return  <div>{navigate("/signUp")}</div>
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

  
};

export default Policia;