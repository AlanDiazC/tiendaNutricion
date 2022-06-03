import React, {
  Component,
  useState,
  useRef,
  useEffect,
  useLayoutEffect,
} from "react";
import SignUp from "./LogIn";
import MiCuenta from "./MiCuenta";
import { auth, db } from "../config/fbconfig";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "@firebase/auth";
import { collection, addDoc, getDocs, query, where } from "@firebase/firestore";
import Swal from "sweetalert2";

const Puente = ({ poli, setPoli }) => {
  const [user, setUser] = useState({});
  const [isUseralive, setUserAlive] = useState(false);
  const [check, setCheckUp] = useState(false);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  useEffect(() => {
    if (user != null) {
      setUserAlive(true);
    }

    return function cleanup() {
      setUserAlive(false);
      setCheckUp(true);
    };
  }, [user]);

  if (isUseralive !== false || user !== null) {
    return (
      <div>
        <MiCuenta />
      </div>
    );
  } else {
    return (
      <div>
        <SignUp />
      </div>
    );
  }
};

export default Puente;
