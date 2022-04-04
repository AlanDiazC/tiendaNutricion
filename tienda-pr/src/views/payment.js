import React, { useState, useRef } from "react";
import "../css/homepage.css";
import { auth, db } from "../config/fbconfig";
import Policia from "./policia";
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  onSnapshot,
} from "@firebase/firestore";

import { useParams } from "react-router-dom";

const Pagos = () => {
  const { idPrecio } = useParams();
  const [poli, setPoli] = useState(false);
  //precio parametro
  const realizarPago = async () => {
    const docRef = await addDoc(
      collection(db, `clientes/${auth.currentUser.uid}/checkout_sessions`),
      {
        mode: "payment",
        price: idPrecio, //precio parametro
        success_url: window.location.origin,
        cancel_url: window.location.origin,
      }
    );

    onSnapshot(docRef, (snap) => {
      const { error, url } = snap.data();
      if (error) {
        // Show an error to your customer and
        // inspect your Cloud Function logs in the Firebase console.
        alert(`An error occured: ${error.message}`);
      }
      if (url) {
        // We have a Stripe Checkout URL, let's redirect.
        window.location.assign(url);
      }
    });
  };
  const revision = () => {
    if (poli == true) {
      return (
        <div>
          <div className="">
            <button onClick={realizarPago}>Pagar</button>;
          </div>
        </div>
      );
    } else {
      return <div>Loading</div>;
    }
  };

  return (
    <div>
      <Policia poli={poli} setPoli={setPoli} />
      <div>{revision()}</div>
    </div>
  );
};

export default Pagos;
