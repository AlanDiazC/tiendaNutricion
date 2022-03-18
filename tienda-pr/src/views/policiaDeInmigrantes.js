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

const Policia = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  }, []);
  

  // useLayoutEffect(() => {

  //     const getLevel = async () =>{
  //         const usersCollectionReference = collection(db,"usersRegistry");
  //         console.log("REFERENCIA",usersCollectionReference);
  //         const uid2 = user;
  //         if(uid2.uid){
  //         const uid = uid2.uid;
  //         console.log('UID CLIENTE' , uid);
  //         const q = query(usersCollectionReference, where("UID","==",uid));
  //         const loggedUserData = await getDocs(q);
  //         // loggedUserData.forEach((doc) => { console.log(doc.data())});
  //         const trueLevel = loggedUserData.docs[0].data().nivelCuenta
  //         console.log("trustLevel",trueLevel);
  //         setLevel(trueLevel);
  //         await setAmigo();

  //         }

  //     }
  //     const setAmigo = async () => {

  //         if(user.uid){
  //             setAmigito(3)
  //         }else { setAmigito(1)}

  //     }

  //     getLevel();

  //     return function cleanup(){

  //         setUserAlive(false);
  //         setCheckUp(true);

  // }

  // },[user, level]);

  if (user == null) {
    return  <div>{navigate("/signUp")}</div>
  } else {
    return null;
  }
};

export default Policia;