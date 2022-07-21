import React, { useState, useRef } from "react";
import "../cssVieja/homepage.css";
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
//Se necesita modificar para que sea compatible con el carrito
const Pagos = () => {
  const { idPrecio } = useParams();
  const [poli, setPoli] = useState(false);
  //precio parametro
  const realizarPago = async () => {
    const docRef = await addDoc(
      collection(db, `clientes/${auth.currentUser.uid}/checkout_sessions`),
      {
      mode: "payment",
       line_items: [
        {
          price: 'price_1L50FtAUDqNuV9CvLBC0i8ME', // RECURRING_PRICE_ID
          quantity: 2, 
        },
        {
          price: 'price_1LNu34AUDqNuV9CvPC8lLXMX', // ONE_TIME_PRICE_ID
          quantity: 1,
        },
      ], //precio parametro
        success_url: window.location.origin,
        cancel_url: window.location.origin,
      }
    ); 
/*     const docRef = await db
    .collection('clientes')
    .doc(auth.currentUser)
    .collection('checkout_sessions')
    .add({
      line_items: [
        {
          price: 'price_1L50FtAUDqNuV9CvLBC0i8ME', // RECURRING_PRICE_ID
          quantity: 2, 
        },
        {
          price: 'price_1L50GBAUDqNuV9CvrDyc0npb', // ONE_TIME_PRICE_ID
          quantity: 1,
        },
      ],
      success_url: window.location.origin,
      cancel_url: window.location.origin,
    }); */
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
